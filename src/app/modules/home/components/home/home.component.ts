import { Component, OnInit } from '@angular/core';
import { Geolocation } from 'src/app/core/types/geolocation';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public lonLat: Geolocation | undefined = undefined;

  constructor(private geolocation: GeolocationService) {}

  async ngOnInit(): Promise<void> {
    this.lonLat = await this.geolocation.getLonLat();
  }
}
