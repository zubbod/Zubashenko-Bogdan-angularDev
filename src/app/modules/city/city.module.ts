import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './components/city/city.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerModule } from '../spinner/spinner.module';
import { CelsiusFahrenheitModule } from '../celsius-fahrenheit/celsius-fahrenheit.module';

@NgModule({
  declarations: [CityComponent],
  exports: [CityComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, SpinnerModule, CelsiusFahrenheitModule],
})
export class CityModule {}
