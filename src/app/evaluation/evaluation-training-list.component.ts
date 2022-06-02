import { Component } from '@angular/core';
import {first} from "rxjs/operators";
import {Training} from "../_models/training";
import {TrainingService} from "../_services";

@Component({
  selector: 'app-evaluation.training-list',
  templateUrl: './evaluation-training-list.component.html'
})
/**
 * Stellt die Auswertungs-Trainings-Listen-Komponente bereit. Sowohl die Oberfläche als auch die Logik ist in dieser
 * Komponente verankert. Über diese Komponente soll ein Lehrer ein Training auswählen, welches er Auswerten lassen
 * möchte.
 * @author Florian Weinert
 */
export class EvaluationTrainingListComponent {
  model: Training[]=[];
  /**
   * Wird beim Erstellen cer Komponente aufgerufen. Holt sich über den TrainingsService alle Trainings welche
   * mindestens von einem Schüler bearbeitet wurden.
   * @param trainingsService wird verwendet um alle mindestens einmal bearbeiteten Trainings zu erhalten.
   */
  constructor(private trainingsService: TrainingService) {
    this.trainingsService.getAllTrainingsWhichAreProcessed().subscribe(trainings => this.model =trainings);
  }
}
