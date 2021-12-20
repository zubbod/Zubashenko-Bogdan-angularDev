import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from 'src/app/core/interfaces/city';
import { Geolocation } from 'src/app/core/types/geolocation';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { GeopositionSearchService } from 'src/app/services/geoposition-search.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public currentWeather: Observable<any>;
  private lonLat: Geolocation | undefined = undefined;

  constructor(
    private geolocationService: GeolocationService,
    private weatherService: WeatherService,
    private geopositionSearchService: GeopositionSearchService,
  ) {}

  async ngOnInit(): Promise<void> {
    await this.getCurrentWeather();
  }

  public selectCity(city: City) {
    this.currentWeather = this.weatherService.getCurrentCityWeather(city.key);
  }

  private async getCurrentWeather(): Promise<any> {
    this.lonLat = await this.geolocationService.getLonLat();
    if (this.lonLat && !this.lonLat.isEmpty()) {
      this.getCurrentWeatherByLonLat(this.lonLat);
    } else {
      this.weatherService.getCurrentCityWeather();
    }
  }

  private async getCurrentWeatherByLonLat(coords: Geolocation): Promise<void> {
    const { key } = await this.geopositionSearchService
      .getCity(coords)
      .toPromise();
    this.currentWeather = this.weatherService.getCurrentCityWeather(key);
  }
}
