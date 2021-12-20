import { TemperatureItem } from '../interfaces/temperature-item';

export class MinMaxTemperatureModel {
  public minimum: TemperatureItem;
  public maximum: TemperatureItem;

  constructor(data: MinMaxTemperatureModel) {
    this.minimum = data.minimum;
    this.maximum = data.maximum;
  }
}
