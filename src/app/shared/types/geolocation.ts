export type LonLat = Pick<GeolocationCoordinates, 'latitude' | 'longitude'>;

export const EMPTY_LOCATION: LonLat = {
  longitude: -1,
  latitude: -1,
};
