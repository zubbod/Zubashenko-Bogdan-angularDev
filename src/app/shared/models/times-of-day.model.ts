export class TimesOfDayModel {
  public iconPhrase: string;
  public hasPrecipitation: boolean;
  public precipitationType: string;

  constructor(data: TimesOfDayModel) {
    this.hasPrecipitation = data.hasPrecipitation;
    this.iconPhrase = data.iconPhrase.replace('w/', '');
    this.precipitationType = data.precipitationType;
  }
}
