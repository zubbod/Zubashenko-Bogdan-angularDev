import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ForecastModel } from '../core/models/forecast.model';
import { WeatherModel } from '../core/models/weather.model';
import { WEATHER_API_KEY } from '../core/tokens/weather-api-key';
import { WEATHER_API_URL } from '../core/tokens/weather-api-url';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private cityKey = '324505';

  constructor(
    private httpClient: HttpClient,
    @Inject(WEATHER_API_KEY) private apiKey: string,
    @Inject(WEATHER_API_URL) private apiUrl: string,
  ) {}

  public getCurrentCityWeather(cityKey: string = this.cityKey): Observable<WeatherModel[]> {
    this.cityKey = cityKey;
    return this.httpClient
      .get<WeatherModel[]>(this.getRequestUrl(), {
        params: { language: 'en-us', apikey: this.apiKey },
      })
      .pipe(map(response => response.map(weather => new WeatherModel(weather))));
  }

  public getWeatherForecast(cityKey: string = this.cityKey): Observable<ForecastModel> {
    this.cityKey = cityKey;
    return this.httpClient
      .get<ForecastModel>(this.getForecastRequestUrl(), {
        params: { language: 'en-us', apikey: this.apiKey },
      })
      .pipe(map(forecast => new ForecastModel(forecast)));
  }

  private getRequestUrl(): string {
    return `${this.apiUrl}currentconditions/v1/${this.cityKey}`;
    // return `/assets/mock/current-condition.json`;
  }

  private getForecastRequestUrl(): string {
    return `${this.apiUrl}forecasts/v1/daily/5day/${this.cityKey}?metric=true`;
    // return `/assets/mock/daily-forecast.json`;
  }
}
