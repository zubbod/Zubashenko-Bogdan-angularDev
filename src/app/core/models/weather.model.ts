import { PrecipitationType } from '../enums/precipitation-type.enum';
import { TemperatureModel } from './temperature.mode';

export class WeatherModel {
  public localObservationDateTime: Date;
  public weatherText: string;
  public hasPrecipitation: boolean;
  public precipitationType: PrecipitationType | null;
  public isDayTime: boolean;
  public temperature: TemperatureModel;

  constructor(data: WeatherModel) {
    this.localObservationDateTime = new Date(data.localObservationDateTime);
    this.weatherText = data.weatherText;
    this.hasPrecipitation = data.hasPrecipitation;
    this.precipitationType = data.precipitationType;
    this.isDayTime = data.isDayTime;
    this.temperature = new TemperatureModel(data.temperature);
  }
}
