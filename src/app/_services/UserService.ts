/**
 * In dem Ordner _services werden alle benötigten services definiert die erforderlich sind,
 * um mit dem Server die Daten auszutauschen

 * get = daten werden vom Server benötigt

 * @author Chris Leon Brinkhoff
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {User} from "../_models";
import {Observable} from "rxjs";



@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }
  /**
   * Es werden alle User abgefragt und in einem Array vom Server zurückgeliefert
   */
  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }




}
