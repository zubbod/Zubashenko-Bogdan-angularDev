import { BaseAdministrativeArea } from './country';

export interface City {
  readonly key: string;
  readonly type: string;
  readonly rank: number;
  readonly localizedName: string;
  readonly country: BaseAdministrativeArea;
  readonly administrativeArea: BaseAdministrativeArea;
}
