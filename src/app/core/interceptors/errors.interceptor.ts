import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpStatusCode,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { MessageService } from 'src/app/services/message.service';

@Injectable()
export class ErrorsInterceptor implements HttpInterceptor {
  constructor(private messageService: MessageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case HttpStatusCode.BadRequest:
            this.messageService.showWarning('Request had bad syntax or the parameters supplied were invalid.');
            break;
          case HttpStatusCode.Unauthorized:
            this.messageService.showWarning('Unauthorized. API authorization failed.');
            break;
          case HttpStatusCode.Forbidden:
            this.messageService.showWarning('Unauthorized. You do not have permission to access this endpoint.');
            break;
          case HttpStatusCode.NotFound:
            this.messageService.showWarning('Server has not found a route matching the given URI.');
            break;
          case HttpStatusCode.InternalServerError:
            this.messageService.showWarning(
              'Server encountered an unexpected condition which prevented it from fulfilling the request.',
            );
            break;
          case HttpStatusCode.ServiceUnavailable:
            this.messageService.showWarning('Server unavailable.');
            break;
          default:
            this.messageService.showWarning(`${error.statusText} ${error.message}`);
            break;
        }
        return throwError(error);
      }),
    );
  }
}
