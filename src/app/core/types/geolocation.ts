export type LonLat = Pick<GeolocationCoordinates, 'latitude' | 'longitude'>;

export const EMPTY_LOCATION: LonLat = {
  longitude: -1,
  latitude: -1,
};

export class Geolocation implements LonLat {
  public longitude: number = -1;
  public latitude: number = -1;

  constructor(data: LonLat | null) {
    if (data) {
      Object.assign(this, data);
    } else {
      Object.assign(this, EMPTY_LOCATION);
    }
  }

  public isEmpty(): boolean {
    return this.latitude === -1 || this.longitude === -1;
  }
}
