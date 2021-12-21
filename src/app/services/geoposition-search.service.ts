import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { City } from '../shared/interfaces/city';
import { CityModel } from '../shared/models/city.model';
import { GeolocationModel } from '../shared/models/geolocation-model';
import { WEATHER_API_KEY } from '../core/tokens/weather-api-key';
import { WEATHER_API_URL } from '../core/tokens/weather-api-url';

@Injectable()
export class GeopositionSearchService {
  // private requestUrl = `${this.apiUrl}locations/v1/cities/geoposition/search`;
  private requestUrl = `/assets/mock/geoposition-search.json`;
  constructor(
    private httpClient: HttpClient,
    @Inject(WEATHER_API_KEY) private apiKey: string,
    @Inject(WEATHER_API_URL) private apiUrl: string,
  ) {}

  public getCity(coords: GeolocationModel): Observable<City | null> {
    return this.httpClient
      .get<City>(this.requestUrl, {
        params: {
          language: 'en-us',
          q: coords.toString(),
          apikey: this.apiKey,
        },
      })
      .pipe(
        catchError(() => {
          return of(null);
        }),
        map(res => res && new CityModel(res)),
      );
  }
}
