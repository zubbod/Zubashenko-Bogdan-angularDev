import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultParamsInterceptor } from './core/interceptors/default-params.interceptor';
import { ErrorsInterceptor } from './core/interceptors/errors.interceptor';
import { ResponseInterceptor } from './core/interceptors/response.interceptor';
import { ASSETS_URL } from './core/tokens/assets-url.token';
import { WEATHER_API_KEY } from './core/tokens/weather-api-key';
import { WEATHER_API_URL } from './core/tokens/weather-api-url';
import { HeaderModule } from './modules/header/header.module';

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
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorsInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DefaultParamsInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
