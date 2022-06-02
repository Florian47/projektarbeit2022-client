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
   * @param id id des Trainings welches benötigt wird
   */
  getById(id: number) {
    return this.http.get<Training>(`${environment.apiUrl}/training/${id}`);
  }

  /**
   * es wird ein Update eines Trainings dem Server mitgeteilt
   * @param id id des Trainings welches geupdated wird
   * @param params parameter fürs update
   */
  update(id: any, params: Training) {
    return this.http.put(`${environment.apiUrl}/training/edit/${id}`, params);

  }

  /**
   * Es wird dem Server ein eine neues Training übergeben
   * @param training training welches gespeichert werden soll
   */
  create(training: Training) {

    return this.http.post(`${environment.apiUrl}/training/add`, training);

  }

  /**
   * Es wird ein Training erstellt welches ein Schueler selber definiert hat
   * @param studentGeneratedTraining die angaben vom Schueler werden übergeben und ein Training zurückgegeben
   */
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
   * Es wird ein Array mit allen Trainings  für genau einen Studenten geliefert
   * @param id id des schuelers für den die Treainings abgefragt werden
   */
  getAllTrainingsForStudent(id: number) {
    return this.http.get<Training[]>(`${environment.apiUrl}/training/schueler/${id}`);
  }

  /**
   * Es wird ein Training mit der Übergebenen Id gelöscht
   * @param id id des Trainings welches gelöscht werden soll
   *
   */
  delete(id: number) {
    return this.http.delete(`${environment.apiUrl}/training/${id}`);
  }
}
