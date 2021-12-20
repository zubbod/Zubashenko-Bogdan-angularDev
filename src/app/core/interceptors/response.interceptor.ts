import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor() {}
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map(event => {
        if (event instanceof HttpResponse) {
          if (event.body) {
            const data = this.convert(event.body);
            return event.clone({ body: data });
          }
        }
        return event;
      }),
    );
  }

  private convert(value: any): any[] | Record<string, any> {
    const data: any = Array.isArray(value) ? [] : {};
    for (let p in value) {
      if (!this.isPrimitive(value[p])) {
        data[this.mapPropToCamelcase(p)] = this.convert(value[p]);
      } else {
        data[this.mapPropToCamelcase(p)] = value[p];
      }
    }
    return data;
  }

  private mapPropToCamelcase(prop: string | number): string | number {
    if (prop === 'ID') {
      return prop.toLowerCase();
    }
    return typeof prop === 'string'
      ? prop.replace(/^[A-Z]/, val => val.toLowerCase())
      : prop;
  }

  private isPrimitive(value: unknown) {
    const type = typeof value;
    return (
      value === null ||
      value === undefined ||
      (type !== 'object' && type !== 'function')
    );
  }
}
