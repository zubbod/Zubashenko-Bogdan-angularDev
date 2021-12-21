import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CityService } from 'src/app/services/city.service';
import { InputOnlyLettersModule } from 'src/app/shared/directives/input-only-letters/input-only-letters.module';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    InputOnlyLettersModule,
    MatAutocompleteModule,
    MatFormFieldModule,
  ],
  providers: [CityService],
})
export class SearchCityModule {}
