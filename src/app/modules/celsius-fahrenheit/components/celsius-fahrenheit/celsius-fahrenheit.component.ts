import { Component, Inject, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TEMPERATURE_TYPE } from 'src/app/core/tokens/temperature-type';
import { TemperatureType } from 'src/app/shared/enums/temperature-type.enum';

@Component({
  selector: 'app-celsius-fahrenheit',
  templateUrl: './celsius-fahrenheit.component.html',
  styleUrls: ['./celsius-fahrenheit.component.scss'],
})
export class CelsiusFahrenheitComponent implements OnInit {
  public celsius: TemperatureType = TemperatureType.Celsius;
  public fahrenheit: TemperatureType = TemperatureType.Fahrenheit;
  public currentTemperatyreType: TemperatureType = this.temperatureType.value;
  constructor(
    @Inject(TEMPERATURE_TYPE) private temperatureType: BehaviorSubject<TemperatureType>,
  ) {}

  ngOnInit(): void {}

  public tooggleTempType(): void {
    this.currentTemperatyreType =
      this.currentTemperatyreType === this.celsius ? this.fahrenheit : this.celsius;
    this.temperatureType.next(this.currentTemperatyreType);
  }
}
