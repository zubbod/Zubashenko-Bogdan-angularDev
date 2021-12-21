import { LonLat, EMPTY_LOCATION } from '../types/geolocation';

export class GeolocationModel implements LonLat {
  public longitude: number = -1;
  public latitude: number = -1;

  constructor(data: LonLat | null) {
    if (data) {
      this.latitude = data.latitude;
      this.longitude = data.longitude;
    } else {
      Object.assign(this, EMPTY_LOCATION);
    }
  }

  public isEmpty(): boolean {
    return this.latitude === -1 || this.longitude === -1;
  }

  public toString(): string {
    return `${this.latitude},${this.longitude}`;
  }
}
