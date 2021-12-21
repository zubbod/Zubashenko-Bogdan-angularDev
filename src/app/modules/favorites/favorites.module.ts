import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritesRoutingModule } from './favorites-routing.module';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoriteItemComponent } from './components/favorite-item/favorite-item.component';


@NgModule({
  declarations: [
    FavoritesComponent,
    FavoriteItemComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule
  ]
})
export class FavoritesModule { }
