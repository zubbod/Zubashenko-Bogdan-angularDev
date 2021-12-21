import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FavoriteService } from 'src/app/services/favorite.service';
import { CityModel } from 'src/app/shared/models/city.model';

@Injectable({
  providedIn: 'root',
})
export class CurrentCityResolver implements Resolve<CityModel | null> {
  constructor(private favoriteService: FavoriteService) {}
  public resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<CityModel | null> {
    return of(this.favoriteService.currentFavoriteLocation);
  }
}
