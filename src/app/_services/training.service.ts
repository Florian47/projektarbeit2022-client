import {User} from "../_models";
import {environment} from "../../environments/environment";

import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Training} from "../_models/training";
import {StudentGeneratedTraining} from "../_models/student.generated.training";


@Injectable({ providedIn: 'root' })
export class TrainingService {



  constructor(
    private router: Router,
    private http: HttpClient
  ) {}
  getById(id: number) {
  return this.http.get<Training>(`${environment.apiUrl}/training/${id}`);
}
  update(id: any, params: Training) {
    return this.http.put(`${environment.apiUrl}/training/edit/${id}`, params);

  }
  create(training: Training) {

    return this.http.post(`${environment.apiUrl}/training/add`, training);

  }
  createStudentTraining(studentGeneratedTraining: StudentGeneratedTraining) {

    return this.http.post<Training>(`${environment.apiUrl}/studentGeneratedTraining/add`, studentGeneratedTraining);

  }
  getAll() {
    return this.http.get<Training[]>(`${environment.apiUrl}/training`);
  }
  getAllTrainingsForStudent(id:number) {
    return this.http.get<Training[]>(`${environment.apiUrl}/training/schueler/${id}`);
  }
  delete(id:number){
    return this.http.delete(`${environment.apiUrl}/training/${id}`);
  }


  //getById(id: string) {
  //  return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  //}

}
