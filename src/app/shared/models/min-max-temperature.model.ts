import { TemperatureType } from '../enums/temperature-type.enum';
import { TemperatureItem } from '../interfaces/temperature-item';

export class MinMaxTemperatureModel {
  public minimum: TemperatureItem;
  public maximum: TemperatureItem;

  private diff = 32;
  private multiplier = 1.8;

  constructor(data: MinMaxTemperatureModel) {
    this.minimum = data.minimum;
    this.maximum = data.maximum;
  }

  public getUnitByType(field: 'minimum' | 'maximum', type: TemperatureType): number | null {
    if (this[field].unit === type) {
      return this[field].value;
    }
    if (this[field].unit === TemperatureType.Celsius && type === TemperatureType.Fahrenheit) {
      return this.CtoF(this[field].value);
    }
    return this.FtoC(this[field].value);
  }

  private FtoC(value: number | null): number | null {
    if (!value) {
      return value;
    }
    return Math.round((value - this.diff) / this.multiplier);
  }

  private CtoF(value: number | null): number | null {
    if (!value) {
      return value;
    }
    return Math.round(value * this.multiplier + this.diff);
  }
}
