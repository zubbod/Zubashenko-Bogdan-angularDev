import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { WEATHER_API_KEY } from '../core/tokens/weather-api-key';
import { WEATHER_API_URL } from '../core/tokens/weather-api-url';
import { ForecastModel } from '../shared/models/forecast.model';
import { WeatherModel } from '../shared/models/weather.model';
import { CityKey } from '../shared/types/city-key';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private cityKey: CityKey = '324505';

  constructor(
    private httpClient: HttpClient,
    @Inject(WEATHER_API_KEY) private apiKey: string,
    @Inject(WEATHER_API_URL) private apiUrl: string,
  ) {}

  public getCurrentCityWeather(cityKey: CityKey = this.cityKey): Observable<WeatherModel[]> {
    this.cityKey = cityKey;
    return this.httpClient
      .get<WeatherModel[]>(this.getRequestUrl(), {
        params: { language: 'en-us', apikey: this.apiKey },
      })
      .pipe(
        catchError(() => of([])),
        map(response => response.map(weather => new WeatherModel(weather))),
      );
  }

  public getWeatherForecast(cityKey: CityKey = this.cityKey): Observable<ForecastModel | null> {
    this.cityKey = cityKey;
    return this.httpClient.get<ForecastModel>(this.getForecastRequestUrl()).pipe(
      catchError(() => of(null)),
      map(forecast => forecast && new ForecastModel(forecast)),
    );
  }

  private getRequestUrl(): string {
    // return `${this.apiUrl}currentconditions/v1/${this.cityKey}`;
    return `/assets/mock/current-condition.json`;
  }

  private getForecastRequestUrl(): string {
    // return `${this.apiUrl}forecasts/v1/daily/5day/${this.cityKey}?metric=true`;
    return `/assets/mock/daily-forecast.json`;
  }
}
