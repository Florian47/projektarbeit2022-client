import {Component, OnInit} from '@angular/core';
import {Training} from "../_models/training";
import {TrainingService} from "../_services/training.service";
import {Task} from "../_models/task";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-task-table',
  templateUrl: './training.component.html'
})
/**
 * Stellt die Training Übersicht bereit.Hier wird die Oberfläche mit der benötigten Logik bereitgestellt.
 * Der Leherer kann hier alle Trainings die erstellt wurden einsehen
 * @author Chris Leon Brinkhoff
 */
export class TrainingComponent implements OnInit {
  trainings: Training[] = [];
  loading = false;

  /**
   * Wird beim Erzeugen der Komponente aufgerufen.
   * @param trainingService stellt funktionen bereit diese werden in _Services -> training.service.ts erläutert
   */
  constructor(private trainingService: TrainingService) {
  }

  /**
   * Wird beim Start der Komponente aufgerufen und lädt sich alle Trainings von Server und zeigt
   * diese dann auf der Oberfläche an
   */

  ngOnInit(): void {
    this.loading = true;
    this.trainingService.getAllIndividuell().subscribe(e => {
      this.trainings = e;
      this.loading = false;
    });
  }

  /**
   * das Löschen von Trainings wird hier realisiert
   * @param id gibt an welches Training gelöscht werden soll
   */
  deleteTraining(id: number) {
    this.trainingService.delete(id).pipe(first()).subscribe(() => this.trainings = this.trainings.filter((x: Training) => x.id !== id));
  }

}
