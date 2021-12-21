import { TemperatureType } from '../enums/temperature-type.enum';
import { TemperatureItem } from '../interfaces/temperature-item';

export class TemperatureModel {
  public metric: TemperatureItem;
  public imperial: TemperatureItem;

  constructor(data: TemperatureModel) {
    this.metric = data.metric;
    this.imperial = data.imperial;
  }

  public getByType(type: TemperatureType): TemperatureItem {
    return this.metric.unit === type ? this.metric : this.imperial;
  }
}
