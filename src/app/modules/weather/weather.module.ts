import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';

@NgModule({
  declarations: [CurrentWeatherComponent, WeatherForecastComponent],
  exports: [CurrentWeatherComponent, WeatherForecastComponent],
  imports: [CommonModule],
})
export class WeatherModule {}
