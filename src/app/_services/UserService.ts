import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {User} from "../_models";
import {Observable} from "rxjs";


@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: number) {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
  getStudentBoard(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/students`, {responseType: 'text'});
  }
  getTeacherBoard(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/task`, {responseType: 'text'});
  }
}
