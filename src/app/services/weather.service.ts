import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  public getCurrentCityWeather(
    cityKey: string = this.cityKey,
  ): Observable<any> {
    this.cityKey = cityKey;
    return this.httpClient
      .get<any[]>(this.getRequestUrl(), {
        params: { language: 'en-us', apikey: this.apiKey },
      })
      .pipe(map(res => res));
  }

  private getRequestUrl(): string {
    // return `${this.apiUrl}currentconditions/v1/${this.cityKey}`;
    return `/assets/mock/current-condition.json`;
  }
}
