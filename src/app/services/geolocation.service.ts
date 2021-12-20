import { Injectable } from '@angular/core';
import { GeolocationModel } from '../core/models/geolocation-model';
import { MessageService } from './message.service';

@Injectable()
export class GeolocationService {
  private notSupportGeolocationMessage =
    'Geolocation not support on your device';

  private retrieveGeolocationErrorMessage = 'Can not retrieve your location';

  constructor(private messageService: MessageService) {}

  public async getLonLat(): Promise<GeolocationModel> {
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
  ): GeolocationModel {
    return new GeolocationModel(position ? position.coords : null);
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
