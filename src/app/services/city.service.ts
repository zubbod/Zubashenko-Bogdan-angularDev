import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from '../core/interfaces/city';
import { CityModel } from '../core/models/city.model';
import { WEATHER_API_KEY } from '../core/tokens/weather-api-key';
import { WEATHER_API_URL } from '../core/tokens/weather-api-url';

@Injectable()
export class CityService {
  private requestUrl = `${this.apiUrl}locations/v1/cities/autocomplete`;
  // private requestUrl = `/assets/mock/city-autocomplete.json`;
  constructor(
    private httpClient: HttpClient,
    @Inject(WEATHER_API_KEY) private apiKey: string,
    @Inject(WEATHER_API_URL) private apiUrl: string,
  ) {}

  public suggestCity(query: string): Observable<City[]> {
    return this.httpClient
      .get<City[]>(this.requestUrl, {
        params: { language: 'en-us', q: query, apikey: this.apiKey },
      })
      .pipe(map(res => res.map(city => new CityModel(city))));
  }
}
