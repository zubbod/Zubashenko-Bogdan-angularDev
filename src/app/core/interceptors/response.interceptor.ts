import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor() {}
  public intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map(event => {
        if (event instanceof HttpResponse && event.body) {
          const data = this.convertToCamelcase(event.body);
          return event.clone({ body: data });
        }
        return event;
      }),
    );
  }

  private convertToCamelcase<T>(value: T): T {
    const data: any = Array.isArray(value) ? [] : {};
    for (let p in value) {
      if (!this.isPrimitive(value[p])) {
        data[this.mapPropToCamelcase(p)] = this.convertToCamelcase(value[p]);
      } else {
        data[this.mapPropToCamelcase(p)] = value[p];
      }
    }
    return data as T;
  }

  private mapPropToCamelcase(prop: string | number): string | number {
    if (prop === 'ID') {
      return prop.toLowerCase();
    }
    return typeof prop === 'string' ? prop.replace(/^[A-Z]/, val => val.toLowerCase()) : prop;
  }

  private isPrimitive(value: unknown): boolean {
    const type = typeof value;
    return value === null || value === undefined || (type !== 'object' && type !== 'function');
  }
}
