import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './modules/header/header.module';
import { environment } from 'src/environments/environment';
import { ASSETS_URL } from './core/tokens/assets-url.token';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
  ],
  providers: [
    {
      provide: ASSETS_URL,
      useValue: environment.assetsUrl,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
