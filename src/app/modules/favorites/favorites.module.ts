import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackToHomeButtonModule } from '../back-to-home-button/back-to-home-button.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.module';

@NgModule({
  declarations: [FavoritesComponent, FavoriteItemComponent],
  imports: [CommonModule, FavoritesRoutingModule, SpinnerModule, BackToHomeButtonModule],
})
export class FavoritesModule {}
