import { MinMaxTemperatureModel } from './min-max-temperature.model';
import { TimesOfDayModel } from './times-of-day.model';

export class ForecastItemModel {
  public date: Date;
  public temperature: MinMaxTemperatureModel;
  public day: TimesOfDayModel;
  public night: TimesOfDayModel;

  constructor(data: ForecastItemModel) {
    this.date = new Date(data.date);
    this.temperature = new MinMaxTemperatureModel(data.temperature);
    this.day = new TimesOfDayModel(data.day);
    this.night = new TimesOfDayModel(data.night);
  }
}
