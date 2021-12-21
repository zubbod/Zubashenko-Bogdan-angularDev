import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputOnlyLettersModule } from 'src/app/shared/directives/input-only-letters/input-only-letters.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { CityService } from 'src/app/services/city.service';
import { MatFormFieldModule } from '@angular/material/form-field';
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
