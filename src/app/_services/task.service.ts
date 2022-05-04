import {User} from "../_models";
import {environment} from "../../environments/environment";

import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";


@Injectable({ providedIn: 'root' })
export class TaskService {



  constructor(
    private router: Router,
    private http: HttpClient
  ) {}
  getById(id: string) {
  return this.http.get<Task>(`${environment.apiUrl}/task/${id}`);
}
  update(id: any, params: any) {
    return this.http.put(`${environment.apiUrl}/task/edit/${id}`, params);

  }
  create(task: Task) {

    return this.http.post(`${environment.apiUrl}/task/create`, task);

  }
}
