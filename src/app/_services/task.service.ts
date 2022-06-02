/**
 * In dem Ordner _services werden alle benötigten services definiert die erforderlich sind,
 * um mit dem Server die Daten auszutauschen
 * post = call zum Speichern auf dem Server
 * get = daten werden vom Server benötigt
 * put = daten werden geändert
 * delete = daten werden gelöscht
 * @author Chris Leon Brinkhoff
 */
import {environment} from "../../environments/environment";

import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Task} from "../_models/task";


@Injectable({ providedIn: 'root' })
export class TaskService {



  constructor(
    private router: Router,
    private http: HttpClient
  ) {}
  /**
   * Es wird eine Aufgabe mit der Übergebenen ID  vom Server abgerufen
   */
  getById(id: number) {
  return this.http.get<Task>(`${environment.apiUrl}/task/${id}`);
}
  /**
   * es wird ein Update eines Task dem Server mitgeteilt
   */
  update(id: any, params: any) {
    return this.http.put(`${environment.apiUrl}/task/edit/${id}`, params);

  }
  /**
   * Es wird dem Server ein eine neue task übergeben
   */
  create(task: Task) {

    return this.http.post(`${environment.apiUrl}/task/add`, task);

  }
  /**
   *Es wird ein Array mit allen Task geliefert
   */
  getAll() {
    return this.http.get<Task[]>(`${environment.apiUrl}/task`);
  }
  /**
   * Es wird ein Task mit der Übergebenen Id gelöscht
   * */
  delete(id:number){
    return this.http.delete(`${environment.apiUrl}/task/${id}`);
  }

}
