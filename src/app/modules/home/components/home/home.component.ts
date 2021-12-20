import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CityModel } from 'src/app/core/models/city.model';
import { ForecastModel } from 'src/app/core/models/forecast.model';
import { GeolocationModel } from 'src/app/core/models/geolocation-model';
import { WeatherModel } from 'src/app/core/models/weather.model';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { GeopositionSearchService } from 'src/app/services/geoposition-search.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public currentWeather: Observable<WeatherModel[]>;
  public currentForecast: Observable<ForecastModel>;
  public currentCity: Observable<CityModel>;
  private lonLat: GeolocationModel | undefined = undefined;

  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService,
    private geopositionSearchService: GeopositionSearchService,
    private changeDetector: ChangeDetectorRef,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getCurrentWeather();
  }

  public selectCity(city: CityModel) {
    this.currentCity = of(city);
    this.getWeatherByCityKey(city.key);
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
      tap(res => {
        this.getWeatherByCityKey(res.key);
      }),
    );
  }

  private getWeatherByCityKey(cityKey: string): void {
    this.currentWeather = this.weatherService.getCurrentCityWeather(cityKey);
    this.currentForecast = this.weatherService.getWeatherForecast(cityKey);
  }
}
