import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  private title = 'Favorites';
  constructor(private favoriteService: FavoriteService, private router: Router) {
    this.favoriteLocations = this.favoriteService.get();
  }

  public ngOnInit(): void {
    this.favoriteService.currentFavoriteLocation = null;
  }

  public showFavorite(city: CityModel): void {
    this.favoriteService.currentFavoriteLocation = city;
    this.router.navigate(['home']);
  }
}
