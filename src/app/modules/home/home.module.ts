import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { GeopositionSearchService } from 'src/app/services/geoposition-search.service';
import { CityModule } from '../city/city.module';
import { SearchCityModule } from '../search-city/search-city.module';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SearchCityModule, CityModule],
  providers: [GeolocationService, GeopositionSearchService],
})
export class HomeModule {}
