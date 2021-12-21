import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/services/favorite.service';
import { CityModel } from 'src/app/shared/models/city.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent implements OnInit {
  public favoriteLocations: CityModel[] = [];
  constructor(private favoriteService: FavoriteService) {
    this.favoriteLocations = this.favoriteService.get();
  }

  ngOnInit(): void {}
}
