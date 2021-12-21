import { Injectable } from '@angular/core';
import { CityModel } from '../shared/models/city.model';
import { CityKey } from '../shared/types/city-key';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favorites: Map<CityKey, CityModel> = new Map();

  constructor() {
    this.favorites.set('324195', {
      isFavorite: true,
      key: '324195',
      type: 'City',
      rank: 75,
      localizedName: 'Dobrovelychkivka',
      country: {
        id: 'UA',
        localizedName: 'Ukraine',
      },
      administrativeArea: {
        id: '35',
        localizedName: 'Kirovohrad',
      },
    });
  }

  public add(location: CityModel): void {
    this.favorites.set(location.key, location);
    console.log(this.favorites);
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
