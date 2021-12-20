import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputOnlyLettersModule } from 'src/app/core/directives/input-only-letters/input-only-letters.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CityService } from 'src/app/services/city.service';

@NgModule({
  declarations: [HomeComponent, SearchComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    InputOnlyLettersModule,
    MatAutocompleteModule,
  ],
  providers: [GeolocationService, CityService],
})
export class HomeModule {}
