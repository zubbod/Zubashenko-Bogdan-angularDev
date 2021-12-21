import { BaseAdministrativeArea } from '../interfaces/country';

export class CityModel {
  public key: string;
  public type: string;
  public rank: number;
  public localizedName: string;
  public country: BaseAdministrativeArea;
  public administrativeArea: BaseAdministrativeArea;
  public isFavorite: boolean = false;

  constructor(data: CityModel) {
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
