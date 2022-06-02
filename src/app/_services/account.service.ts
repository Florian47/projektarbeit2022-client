/**
 * In dem Ordner _services werden alle benötigten services definiert die Benötigt werden,
 * um mit dem Server die Daten auszutauschen
 * post = call zum Speichern auf dem Server
 * get = daten werden vom Server benötigt
 * put = daten werden geändert
 * delete = daten werden gelöscht
 * @author Chris Leon Brinkhoff
 */
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from 'src/environments/environment';
import {Role, User} from 'src/app/_models';

@Injectable({ providedIn: 'root' })
export class AccountService {
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<User | null>(JSON.parse(<string>localStorage.getItem('user')));
    this.user = <Observable<User>> this.userSubject.asObservable();
  }

  /**
   * diese Methode liefert den User
   */

  public get userValue(): User {
    return <User>this.userSubject.value;
  }
  /**
   * diese realisiert den Login auf der webseite
   * Es wird beim mit Hilfe eines HTTP cals angefragt ob der Benutzername mit dem Passwort zugriff gewährt werden darf
   */
  login(username: string, password: string) {
    //a.subscribe((resp : HttpResponse<User>) => console.log(resp));
    let observable = this.http.post<HttpResponse<User>>(`${environment.apiUrl}/users/authenticate`, { username, password }, { observe: 'response' });
    observable.subscribe(response => {
      let user = response.body as unknown as User;
      user.token = response.headers.get('Authorization') as string;
      //console.log(resp.headers.get('Authorization'));
      // store user details and jwt token in local storage to keep user logged in between page refreshes
      localStorage.setItem('user', JSON.stringify(user))
      this.userSubject.next(user)
      this.router.navigate(['/']);
      return user;

    });
    return observable;
  }
  /**
   * diese Methode loggt den Benutzer aus dem System aus
   */

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/account/login']);
  }
  /**
   * diese Methode dient dazu ein Benutzer zu geestrieren und dem Server den User zu übergen den dieser dann speichern Muss
   */

  register(user: User) {
    return this.http.post(`${environment.apiUrl}/users/register`, user);
  }
  /**
   * diese Methode liefert ein Array welche alle Benutzer beinhaltet
   */

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }
  /**
   * diese Methode liefert den User mit der übergebenen ID
   */
  getById(id: number) {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
  /**
   * diese Methode liefert ein Array mit allen Rollen
   */

  getRoles() {
    return this.http.get<Role[]>(`${environment.apiUrl}/roles`);
  }

  /**
   * diese Methode kann man einen Benutzer Updaten Übergeben werden die Id und die Paramter die verändert werden
   */
  update(id: any, params: any) {
    return this.http.put(`${environment.apiUrl}/users/${id}`, params)
      .pipe(map(x => {
        // update stored user if the logged in user updated their own record
        if (id == this.userValue.id) {
          // update local storage
          const user = { ...this.userValue, ...params };
          localStorage.setItem('user', JSON.stringify(user));

          // publish updated user to subscribers
          this.userSubject.next(user);
        }
        return x;
      }));
  }
  /**
   * diese Methode löscht den Benutzer mit der Übergebenen Id
   */

  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/users/${id}`)
      .pipe(map(x => {
        // auto logout if the logged in user deleted their own record
        if (id == this.userValue.id) {
          this.logout();
        }
        return x;
      }));
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
