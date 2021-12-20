import { City } from '../interfaces/city';
import { BaseAdministrativeArea } from '../interfaces/country';

export class CityModel implements City {
  public key: string;
  public type: string;
  public rank: number;
  public localizedName: string;
  public country: BaseAdministrativeArea;
  public administrativeArea: BaseAdministrativeArea;

  constructor(data: City) {
    this.key = data.key;
    this.type = data.type;
    this.rank = data.rank;
    this.localizedName = data.localizedName;
    this.country = data.country;
    this.administrativeArea = data.administrativeArea;
  }

  public toString(): string {
    return `${this.localizedName}, ${this.country.localizedName}`;
  }
}
