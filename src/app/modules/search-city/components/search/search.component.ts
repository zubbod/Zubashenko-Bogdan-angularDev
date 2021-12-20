import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs/operators';
import { City } from 'src/app/core/interfaces/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  public searchControl = new FormControl('');
  public cities: Observable<City[]>;
  @Output() public selectCity: EventEmitter<City> = new EventEmitter();

  private minQueryLength = 2;

  constructor(private cityService: CityService) {
    this.cities = (this.searchControl.valueChanges as Observable<string>).pipe(
      filter(query => query.length >= this.minQueryLength),
      distinctUntilChanged(),
      debounceTime(200),
      switchMap(query => this.cityService.suggestCity(query)),
    );
  }

  public selectOption(event: MatAutocompleteSelectedEvent) {
    this.selectCity.emit(event.option.value);
  }
}
