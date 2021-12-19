import { Injectable } from '@angular/core';
import { MessageService } from './message.service';
import { Geolocation } from './../core/types/geolocation';

@Injectable()
export class GeolocationService {
  private notSupportGeolocationMessage =
    'Geolocation not support on your device';

  private retrieveGeolocationErrorMessage = 'Can not retrieve your location';

  constructor(private messageService: MessageService) {}

  public async getLonLat(): Promise<Geolocation> {
    return this.initGeolocation()
      .then(geolocation => {
        return Boolean(geolocation.coords)
          ? this.createLonLatFromGeolocationPosition(geolocation)
          : this.createLonLatFromGeolocationPosition();
      })
      .catch(() => {
        this.showErrorWhenRetrieveLocation();
        return this.createLonLatFromGeolocationPosition();
      });
  }

  private async initGeolocation(): Promise<GeolocationPosition> {
    if (this.isGeolocationSupport()) {
      return this.getCurrentLocation();
    } else {
      this.messageService.showWarning(this.notSupportGeolocationMessage);
      return Promise.resolve({} as GeolocationPosition);
    }
  }

  private createLonLatFromGeolocationPosition(
    position?: GeolocationPosition,
  ): Geolocation {
    return new Geolocation(position ? position.coords : null);
  }

  private getCurrentLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  private isGeolocationSupport(): boolean {
    return Boolean(navigator.geolocation);
  }

  private showErrorWhenRetrieveLocation = (): void => {
    this.messageService.showWarning(this.retrieveGeolocationErrorMessage);
  };
}
