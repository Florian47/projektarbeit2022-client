import {User} from "../_models";
import {environment} from "../../environments/environment";

import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Training} from "../_models/training";


@Injectable({ providedIn: 'root' })
export class TrainingService {



  constructor(
    private router: Router,
    private http: HttpClient
  ) {}
  getById(id: string) {
  return this.http.get<Task>(`${environment.apiUrl}/training/${id}`);
}
  update(id: any, params: Training) {
    return this.http.put(`${environment.apiUrl}/training/edit/${id}`, params);

  }
  create(training: Training) {

    return this.http.post(`${environment.apiUrl}/training/create`, training);

  }
  getAll() {
    return this.http.get<Training[]>(`${environment.apiUrl}/training`);
  }
}
