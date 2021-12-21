import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackToHomeButtonComponent } from './components/back-to-home-button/back-to-home-button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BackToHomeButtonComponent],
  exports: [BackToHomeButtonComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, RouterModule],
})
export class BackToHomeButtonModule {}
