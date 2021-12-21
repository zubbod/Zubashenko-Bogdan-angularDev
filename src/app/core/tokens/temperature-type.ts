import { InjectionToken } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TemperatureType } from 'src/app/shared/enums/temperature-type.enum';

export const TEMPERATURE_TYPE = new InjectionToken<BehaviorSubject<TemperatureType>>(
  'temperature type',
);

export function temperatureTypeFactory(
  type: TemperatureType,
): () => BehaviorSubject<TemperatureType> {
  return function () {
    return new BehaviorSubject(type);
  };
}
