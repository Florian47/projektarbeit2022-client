
/**
 * In dem Ordner _services werden alle benötigten services definiert
 * @author Chris Leon Brinkhoff
 */import {ProcessedTraining} from "../_models/processed.training";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ProcessedTrainingService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
  }

  /**
   * Hier wird genau ein Training vom Server mit der Übergebenen Id angerufen
   * @param id id des trainings
   */
  createProcessableTraining(id: number) {
    return this.http.get<ProcessedTraining>(`${environment.apiUrl}/generateProcessedTraining/${id}`);
  }

  /**
   * Hier wird ein Absolwirtes Training dem Server Übergeben
   * @param id gibt die Id des trainings welches upgedated wird an
   * @param processedTraining Übergbe des bearbeiteten trainings
   */

  update(id: number, processedTraining: ProcessedTraining) {
    return this.http.put(`${environment.apiUrl}/processedTraining/${id}`, processedTraining);
  }

  /**
   * Macht einen Http-Call um über eine Trainings-Identifier deren zugehörigen bearbeiteten und ausgewerteteten
   * Trainings zu erhalten.
   * @param trainingId ist die Id des Trainings auf dessen Basis die bearbeiteten Trainings gesucht werden sollen.
   */
  retrieveAllProcessedForTrainingId(trainingId: number) {
    return this.http.get<ProcessedTraining[]>(`${environment.apiUrl}/evaluate/Training/${trainingId}`);
  }
}
