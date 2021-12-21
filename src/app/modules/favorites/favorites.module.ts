import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritesRoutingModule } from './favorites-routing.module';

@NgModule({
  declarations: [FavoritesComponent, FavoriteItemComponent],
  imports: [CommonModule, FavoritesRoutingModule],
})
export class FavoritesModule {}
