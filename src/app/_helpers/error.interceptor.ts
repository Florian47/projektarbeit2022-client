import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AccountService } from 'src/app/_services';

/**
 * Definiert was beim Erhalten eines HTTP-Errors geschehen soll.
 * @author Florian Weinert
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private accountService: AccountService) {}

  /**
   * Beim Erhalten eines HTTP-Errors wird über den AlertService eine Fehler-Meldung angezeigt.
   * Bei einem 401 oder 403 Fehlers (fehlende Berechtigungen) wird der Nutzer ausgeloggt.
   *
   * @author Florian Weinert
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if ([401, 403].includes(err.status) && this.accountService.userValue) {
        // auto logout if 401 or 403 response returned from api
        this.accountService.logout();
      }

      const error = err.error?.message || err.statusText;
      console.error(err);
      return throwError(error);
    }))
  }
}
