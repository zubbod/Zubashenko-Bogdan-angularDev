import { City } from '../interfaces/city';
import { BaseAdministrativeArea } from '../interfaces/country';

export class CityModel implements City {
  public version: number;
  public key: string;
  public type: string;
  public rank: number;
  public localizedName: string;
  public country: BaseAdministrativeArea;
  public administrativeArea: BaseAdministrativeArea;

  constructor(data: City) {
    Object.assign(this, data);
  }

  public toString(): string {
    return `${this.localizedName}, ${this.country.localizedName}`;
  }
}
