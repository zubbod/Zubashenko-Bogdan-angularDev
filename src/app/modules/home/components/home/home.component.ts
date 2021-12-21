import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, map, shareReplay, tap } from 'rxjs/operators';
import { FavoriteService } from 'src/app/services/favorite.service';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { GeopositionSearchService } from 'src/app/services/geoposition-search.service';
import { WeatherService } from 'src/app/services/weather.service';
import { CityModel } from 'src/app/shared/models/city.model';
import { ForecastModel } from 'src/app/shared/models/forecast.model';
import { GeolocationModel } from 'src/app/shared/models/geolocation-model';
import { WeatherModel } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public currentWeather: Observable<WeatherModel>;
  public currentForecast: Observable<ForecastModel | null>;
  public currentCity: Observable<CityModel | null>;
  private lonLat: GeolocationModel | undefined = undefined;

  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService,
    private geopositionSearchService: GeopositionSearchService,
    private favoriteService: FavoriteService,
    private changeDetector: ChangeDetectorRef,
    private route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    this.subscribeToRouterData();
  }

  public selectCity(city: CityModel) {
    this.currentCity = of(city).pipe(
      tap(city => {
        city.isFavorite = this.favoriteService.isFavorite(city);
      }),
    );
    this.getWeatherByCityKey(city.key);
  }

  private subscribeToRouterData(): void {
    this.route.data
      .pipe(
        tap(async data => {
          if (data.currentCity && data.currentCity instanceof CityModel) {
            this.selectCity(data.currentCity);
          } else {
            await this.getCurrentWeather();
          }
          this.changeDetector.markForCheck();
        }),
      )
      .toPromise();
  }

  private async getCurrentWeather(): Promise<void> {
    this.lonLat = await this.geolocationService.getLonLat();
    if (this.lonLat && !this.lonLat.isEmpty()) {
      this.getCurrentWeatherByLonLat(this.lonLat);
    } else {
      this.weatherService.getCurrentCityWeather();
    }
    this.changeDetector.markForCheck();
  }

  private getCurrentWeatherByLonLat(coords: GeolocationModel): void {
    this.currentCity = this.geopositionSearchService.getCity(coords).pipe(
      tap(city => {
        if (city) {
          this.getWeatherByCityKey(city.key);
          city.isFavorite = this.favoriteService.isFavorite(city);
        }
      }),
      shareReplay(1),
    );
  }

  private getWeatherByCityKey(cityKey: string): void {
    this.currentWeather = this.weatherService.getCurrentCityWeather(cityKey).pipe(
      map(res => res[0]),
      shareReplay(1),
    );
    this.currentForecast = this.weatherService.getWeatherForecast(cityKey);
  }
}
