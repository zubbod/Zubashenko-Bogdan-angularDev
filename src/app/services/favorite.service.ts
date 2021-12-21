import { Injectable } from '@angular/core';
import { CityModel } from '../shared/models/city.model';
import { CityKey } from '../shared/types/city-key';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  public currentFavoriteLocation: CityModel | null = null;
  private favorites: Map<CityKey, CityModel> = new Map();

  public add(location: CityModel): void {
    this.favorites.set(location.key, location);
  }

  public remove(location: CityModel): void {
    if (this.isFavorite(location)) {
      this.favorites.delete(location.key);
    }
  }

  public isFavorite({ key }: CityModel): boolean {
    return this.favorites.has(key);
  }

  public getKeys(): CityKey[] {
    return Array.from(this.favorites.keys());
  }

  public get(): CityModel[] {
    return Array.from(this.favorites.values());
  }
}
