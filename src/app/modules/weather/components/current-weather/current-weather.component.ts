import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CityModel } from 'src/app/core/models/city.model';
import { WeatherModel } from 'src/app/core/models/weather.model';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  @Input() public currentWeather: Observable<WeatherModel[]>;
  @Input() public currentCity: CityModel;

  constructor() {}

  ngOnInit(): void {}
}
