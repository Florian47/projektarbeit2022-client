import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';

// array in local storage for registered users
const usersKey = 'angular-10-registration-login-example-users';
let users = JSON.parse(<string>localStorage.getItem(usersKey)) || [];

/**
 * Testklasse um ein das Backend zu mocken.
 * @author Florian Weinert
 */
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  /**
   * wird wie ein Hook bei einem Http-Call aufgerufen. Crud-Operationen des Nutzers wurden implementiert.
   * @param request
   * @param next
   */
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    return handleRoute();

    function handleRoute() {
      switch (true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/users/register') && method === 'POST':
          return register();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        case url.match(/\/users\/\d+$/) && method === 'GET':
          return getUserById();
        case url.match(/\/users\/\d+$/) && method === 'PUT':
          return updateUser();
        case url.match(/\/users\/\d+$/) && method === 'DELETE':
          return deleteUser();
        default:
          // pass through any requests not handled above
          return next.handle(request);
      }
    }

    /**
     * Funktion um eine Anmeldung zu mocken.
     */
    function authenticate() {
      const { username, password } = body;
      const user = users.find((x: { username: string; password: string; }) => x.username === username && x.password === password);
      if (!user) return error('Username or password is incorrect');
      return ok({
        ...basicDetails(user),
        token: 'fake-jwt-token'
      })
    }

    /**
     * Funktion um eine Registrierung zu mocken.
     */
    function register() {
      const user = body

      if (users.find((x: { username: any; }) => x.username === user.username)) {
        return error('Username "' + user.username + '" is already taken')
      }

      user.id = users.length ? Math.max(...users.map((x: { id: string; }) => x.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem(usersKey, JSON.stringify(users));
      return ok();
    }

    /**
     * Funktion um alle Nutzer zu erhalten.
     */
    function getUsers() {
      if (!isLoggedIn()) return unauthorized();
      return ok(users.map((x: any) => basicDetails(x)));
    }
    /**
     * Funktion um einen Nutzer über die ID zu erhalten.
     */
    function getUserById() {
      if (!isLoggedIn()) return unauthorized();

      const user = users.find((x: { id: number; }) => x.id === idFromUrl());
      return ok(basicDetails(user));
    }
    /**
     * Funktion um einen Nutzer zu aktualisieren.
     */
    function updateUser() {
      if (!isLoggedIn()) return unauthorized();

      let params = body;
      let user = users.find((x: { id: number; }) => x.id === idFromUrl());

      // only update password if entered
      if (!params.password) {
        delete params.password;
      }

      // update and save user
      Object.assign(user, params);
      localStorage.setItem(usersKey, JSON.stringify(users));

      return ok();
    }
    /**
     * Funktion um einen Nutzer zu entfernen.
     */
    function deleteUser() {
      if (!isLoggedIn()) return unauthorized();

      users = users.filter((x: { id: number; }) => x.id !== idFromUrl());
      localStorage.setItem(usersKey, JSON.stringify(users));
      return ok();
    }

    /**
     * Funktion um eine Http-Ok Nachricht zu senden.
     */
    function ok(body?: { token?: string; id: any; username: any; firstName: any; lastName: any; } | undefined) {
      return of(new HttpResponse({ status: 200, body }))
        .pipe(delay(500)); // delay observable to simulate server api call
    }
    /**
     * Funktion um eine Http-Error Nachricht zu senden.
     */
    function error(message: string) {
      return throwError({ error: { message } })
        .pipe(materialize(), delay(500), dematerialize()); // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648);
    }
    /**
     * Funktion um einen Http-Error unauthorized zu senden.
     */
    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorized' } })
        .pipe(materialize(), delay(500), dematerialize());
    }
    /**
     * Funktion um die groben Werte (id, Nutzername, Vorname, Nachname) eines Nutzers zu erhalten.
     */
    function basicDetails(user: { id: any; username: any; firstName: any; lastName: any; }) {
      const { id, username, firstName, lastName } = user;
      return { id, username, firstName, lastName };
    }
    /**
     * Funktion um zu prüfen ob ein Nutzer angemeldet ist.
     */
    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }
    /**
     * Funktion um die Id aus der Url zu lesen.
     */
    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
