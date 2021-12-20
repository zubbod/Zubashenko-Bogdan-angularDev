import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderModule } from './modules/header/header.module';
import { environment } from 'src/environments/environment';
import { ASSETS_URL } from './core/tokens/assets-url.token';
import { WEATHER_API_KEY } from './core/tokens/weather-api-key';
import { WEATHER_API_URL } from './core/tokens/weather-api-url';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResponseInterceptor } from './core/interceptors/response.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    MatSnackBarModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: ASSETS_URL,
      useValue: environment.assetsUrl,
    },
    {
      provide: WEATHER_API_KEY,
      useValue: environment.weatherApiKey,
    },
    {
      provide: WEATHER_API_URL,
      useValue: environment.baseWeatherApiUrl,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ResponseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
