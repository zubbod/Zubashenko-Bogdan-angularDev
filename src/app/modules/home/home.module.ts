import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { GeopositionSearchService } from 'src/app/services/geoposition-search.service';
import { SearchCityModule } from '../search-city/search-city.module';
import { WeatherModule } from '../weather/weather.module';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SearchCityModule, WeatherModule],
  providers: [GeolocationService, GeopositionSearchService],
})
export class HomeModule {}
