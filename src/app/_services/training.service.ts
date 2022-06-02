/**
 * In dem Ordner _services werden alle benötigten services definiert die erforderlich sind,
 * um mit dem Server die Daten auszutauschen
 * post = call zum Speichern auf dem Server
 * get = daten werden vom Server benötigt
 * put = daten werden geändert
 * delete = daten werden gelöscht
 * @author Chris Leon Brinkhoff
 */
import {User} from "../_models";
import {environment} from "../../environments/environment";

import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Training} from "../_models/training";
import {StudentGeneratedTraining} from "../_models/student.generated.training";
import {ProcessedTraining} from "../_models/processed.training";


@Injectable({providedIn: 'root'})
export class TrainingService {


  constructor(
    private http: HttpClient
  ) {
  }
  /**
   * Es wird ein Training mit der Übergebenen ID  vom Server abgerufen
   */
  getById(id: number) {
    return this.http.get<Training>(`${environment.apiUrl}/training/${id}`);
  }
  /**
   * es wird ein Update eines Trainings dem Server mitgeteilt
   */
  update(id: any, params: Training) {
    return this.http.put(`${environment.apiUrl}/training/edit/${id}`, params);

  }
  /**
   * Es wird dem Server ein eine neues Training übergeben
   */
  create(training: Training) {

    return this.http.post(`${environment.apiUrl}/training/add`, training);

  }
  /**
   * Es wird ein Training erstellt welches ein Schueler selber definiert hat
   * */
  createStudentTraining(studentGeneratedTraining: StudentGeneratedTraining) {
    return this.http.post<Training>(`${environment.apiUrl}/studentGeneratedTraining/add`, studentGeneratedTraining);
  }
  /**
   * Es werden alle Individual Trainings abgefragt
   * */

  getAllIndividuell() {
    return this.http.get<Training[]>(`${environment.apiUrl}/training/individuell`);
  }
  /**
   *Es wird ein Array mit allen Trainings  für genau einen Studenten geliefert
   */
  getAllTrainingsForStudent(id: number) {
    return this.http.get<Training[]>(`${environment.apiUrl}/training/schueler/${id}`);
  }
  /**
   * Es wird ein Training mit der Übergebenen Id gelöscht
   * */
  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/training/${id}`);
  }
}
