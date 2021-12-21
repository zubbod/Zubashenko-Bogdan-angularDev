import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityComponent } from './components/city/city.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  declarations: [CityComponent],
  exports: [CityComponent],
  imports: [CommonModule, MatIconModule, MatButtonModule, SpinnerModule],
})
export class CityModule {}
