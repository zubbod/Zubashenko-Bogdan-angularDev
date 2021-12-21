import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { WEATHER_API_KEY } from '../core/tokens/weather-api-key';
import { WEATHER_API_URL } from '../core/tokens/weather-api-url';
import { CityModel } from '../shared/models/city.model';

@Injectable()
export class CityService {
  // private requestUrl = `${this.apiUrl}locations/v1/cities/autocomplete`;
  private requestUrl = `/assets/mock/city-autocomplete.json`;
  constructor(
    private httpClient: HttpClient,
    @Inject(WEATHER_API_KEY) private apiKey: string,
    @Inject(WEATHER_API_URL) private apiUrl: string,
  ) {}

  public suggestCity(query: string): Observable<CityModel[]> {
    return this.httpClient
      .get<CityModel[]>(this.requestUrl, {
        params: { q: query },
      })
      .pipe(
        catchError(() => of([])),
        map(res => res.map(city => new CityModel(city))),
      );
  }
}
