import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class DefaultParamsInterceptor implements HttpInterceptor {
  constructor() {}

  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const cloned = request.clone({ url: this.getUrlWithDefaulParams(request.url) });
    return next.handle(cloned);
  }

  private getUrlWithDefaulParams(url: string): string {
    return url.concat(
      `${url.includes('?') ? '&' : '?'}apikey=${environment.weatherApiKey}`,
      `&language=${environment.language}`,
    );
  }
}
