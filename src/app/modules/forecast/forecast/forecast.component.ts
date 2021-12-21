import { Component, Input, OnInit } from '@angular/core';
import { ForecastItemModel } from 'src/app/shared/models/forecast-item.model';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input() public forecast: ForecastItemModel;
  constructor() {}

  ngOnInit(): void {}
}
