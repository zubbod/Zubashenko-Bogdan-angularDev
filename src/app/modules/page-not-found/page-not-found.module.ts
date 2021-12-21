import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BackToHomeButtonModule } from '../back-to-home-button/back-to-home-button.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [CommonModule, PageNotFoundRoutingModule, BackToHomeButtonModule],
})
export class PageNotFoundModule {}
