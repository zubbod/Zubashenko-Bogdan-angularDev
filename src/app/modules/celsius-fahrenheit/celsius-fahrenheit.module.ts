import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CelsiusFahrenheitComponent } from './components/celsius-fahrenheit/celsius-fahrenheit.component';

@NgModule({
  declarations: [CelsiusFahrenheitComponent],
  exports: [CelsiusFahrenheitComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule],
})
export class CelsiusFahrenheitModule {}
