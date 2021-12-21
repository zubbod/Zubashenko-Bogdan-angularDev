import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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

  constructor(private weatherService: WeatherService) {}

  public ngOnInit(): void {
    this.weather = this.weatherService
      .getCurrentCityWeather(this.city.key)
      .pipe(map(res => res[0]));
  }
}
