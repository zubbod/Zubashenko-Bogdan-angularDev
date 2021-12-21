import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ASSETS_URL } from 'src/app/core/tokens/assets-url.token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public logoUrl = `${this.assetsUrl}img/logo/weather_logo.svg`;
  constructor(@Inject(ASSETS_URL) public assetsUrl: string) {}
}
