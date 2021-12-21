import { Component, Inject, Input, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TEMPERATURE_TYPE } from 'src/app/core/tokens/temperature-type';
import { WeatherService } from 'src/app/services/weather.service';
import { TemperatureType } from 'src/app/shared/enums/temperature-type.enum';
import { CityModel } from 'src/app/shared/models/city.model';
import { WeatherModel } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
})
export class FavoriteItemComponent implements OnInit {
  @Input() public city: CityModel;
  public weather: Observable<WeatherModel>;
  public TemperatureType = TemperatureType;

  constructor(
    private weatherService: WeatherService,
    @Inject(TEMPERATURE_TYPE) public temperatureType: BehaviorSubject<TemperatureType>,
  ) {}

  public ngOnInit(): void {
    this.weather = this.weatherService
      .getCurrentCityWeather(this.city.key)
      .pipe(map(res => res[0]));
  }
}
