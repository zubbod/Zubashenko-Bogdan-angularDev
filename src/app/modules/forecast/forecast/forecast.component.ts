import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ForecastItemModel } from 'src/app/shared/models/forecast-item.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForecastComponent {
  @Input() public forecast: ForecastItemModel;
}
