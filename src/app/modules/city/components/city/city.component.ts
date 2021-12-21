import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ASSETS_URL } from 'src/app/core/tokens/assets-url.token';
import { FavoriteService } from 'src/app/services/favorite.service';
import { TemperatureType } from 'src/app/shared/enums/temperature-type.enum';
import { CityModel } from 'src/app/shared/models/city.model';
import { WeatherModel } from 'src/app/shared/models/weather.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityComponent {
  @Input() public city: Observable<CityModel | null>;
  @Input() public weather: Observable<WeatherModel>;
  public pathToImg = `${this.assetsUrl}img/icons/city.svg`;
  public TemperatureType = TemperatureType;
  public favoriteIcon = 'favorite';
  public favoriteBorderIcon = 'favorite_border';

  constructor(
    @Inject(ASSETS_URL) public assetsUrl: string,
    private favoriteService: FavoriteService,
  ) {}

  public toggleFavorite(city: CityModel): void {
    city.isFavorite ? this.favoriteService.remove(city) : this.favoriteService.add(city);
    city.isFavorite = !city.isFavorite;
  }
}
