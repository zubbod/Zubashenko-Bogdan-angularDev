import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { GeopositionSearchService } from 'src/app/services/geoposition-search.service';
import { CityModule } from '../city/city.module';
import { ForecastModule } from '../forecast/forecast.module';
import { SearchCityModule } from '../search-city/search-city.module';
import { SpinnerModule } from '../spinner/spinner.module';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SearchCityModule,
    CityModule,
    ForecastModule,
    SpinnerModule,
  ],
  providers: [GeolocationService, GeopositionSearchService],
})
export class HomeModule {}
