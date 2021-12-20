import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  concatMap,
  debounceTime,
  distinctUntilChanged,
  filter,
} from 'rxjs/operators';
import { City } from 'src/app/core/interfaces/city';
import { CityService } from 'src/app/services/city.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public searchControl = new FormControl('');
  public cities: Observable<City[]> | undefined;

  private minQueryLength = 2;

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cities = (this.searchControl.valueChanges as Observable<string>).pipe(
      distinctUntilChanged(),
      filter(query => query.length >= this.minQueryLength),
      debounceTime(100),
      concatMap(query => this.cityService.suggestCity(query)),
    );
  }
}
