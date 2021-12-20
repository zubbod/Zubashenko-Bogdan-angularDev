import { Component, Inject, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TemperatureType } from 'src/app/core/enums/temperature-type.enum';
import { CityModel } from 'src/app/core/models/city.model';
import { WeatherModel } from 'src/app/core/models/weather.model';
import { ASSETS_URL } from 'src/app/core/tokens/assets-url.token';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})
export class CityComponent implements OnInit {
  @Input() public city: Observable<CityModel>;
  @Input() public weather: Observable<WeatherModel[]>;
  public pathToImg = `${this.assetsUrl}img/icons/city.svg`;
  public TemperatureType = TemperatureType;

  constructor(@Inject(ASSETS_URL) public assetsUrl: string) {}

  ngOnInit(): void {}
}
