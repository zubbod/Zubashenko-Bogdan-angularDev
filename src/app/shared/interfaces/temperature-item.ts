import { TemperatureType } from '../enums/temperature-type.enum';

export interface TemperatureItem {
  readonly value: number | null;
  readonly unit: TemperatureType;
}
