import {ProcessedTraining} from "../_models/processed.training";
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

  createProcessableTraining(id: number) {
    return this.http.get<ProcessedTraining>(`${environment.apiUrl}/generateProcessedTraining/${id}`);
  }

  update(id: number, processedTraining: ProcessedTraining) {
    return this.http.put(`${environment.apiUrl}/processedTraining/${id}`, processedTraining);
  }
}
