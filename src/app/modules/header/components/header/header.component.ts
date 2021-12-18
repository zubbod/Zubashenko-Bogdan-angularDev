import { Component, Inject, OnInit } from '@angular/core';
import { ASSETS_URL } from 'src/app/core/tokens/assets-url.token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public logoUrl = '';
  constructor(@Inject(ASSETS_URL) assetsUrl: string) {
    this.logoUrl = `${assetsUrl}img/logo/weather_logo.svg`;
  }

  ngOnInit(): void {}
}
