import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TEMPERATURE_TYPE } from 'src/app/core/tokens/temperature-type';
import { TemperatureType } from 'src/app/shared/enums/temperature-type.enum';
import { ForecastItemModel } from 'src/app/shared/models/forecast-item.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastComponent {
  @Input() public forecast: ForecastItemModel;
  constructor(@Inject(TEMPERATURE_TYPE) public temperatureType: BehaviorSubject<TemperatureType>) {}
}
