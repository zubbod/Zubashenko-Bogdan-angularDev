import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputOnlyLettersDirective } from './input-only-letters.directive';

@NgModule({
  declarations: [InputOnlyLettersDirective],
  exports: [InputOnlyLettersDirective],
  imports: [CommonModule],
})
export class InputOnlyLettersModule {}
