import { ForecastHeadlineModel } from './forecast-headline.model';
import { ForecastItemModel } from './forecast-item.model';

export class ForecastModel {
  public headline: ForecastHeadlineModel;
  public dailyForecasts: ForecastItemModel[];

  constructor(data: ForecastModel) {
    this.headline = new ForecastHeadlineModel(data.headline);
    this.dailyForecasts = data.dailyForecasts.map(forecast => new ForecastItemModel(forecast));
  }
}
