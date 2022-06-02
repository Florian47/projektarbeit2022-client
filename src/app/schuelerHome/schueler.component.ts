import {Component} from '@angular/core';
import {TaskDifficulty} from "../_models/task.difficulty";
import {TaskCategory} from "../_models/task.category";
import {StudentGeneratedTraining} from "../_models/student.generated.training";
import {TrainingService} from "../_services";
import {Training} from "../_models/training";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import {AccountService, AlertService} from "../_services";


@Component({
  templateUrl: './schueler.component.html'
})
/**
 * Stellt die Schüler-Ansicht bereit. Sowohl die Oberfläche als auch die Logik ist in dieser Komponente verankert.
 * Hier kann ein Schüler die ihm zugewiesenen Trainings bearbeiten und auf Basis von Selektoren ein eigenes
 * individuelles Training erzeugen und bearbeiten.
 * @author Florian Weinert
 */
export class SchuelerComponent {
  trainingsliste: Training[] = [];
  difficultyOptions: TaskDifficulty[];
  taskTypeOptions: TaskCategory[];
  model: StudentGeneratedTraining = new StudentGeneratedTraining();

  /**
   * Wird beim Erzeugen der Komponente aufgerufen. Füllt die Selektoren für die Schwierigkeit und Kategorie mit
   * allen verfügbaren Optionen.
   * @param accountService wird verwendet um alle Trainings eines Schülers zu bekommen.
   * @param trainingsService wird verwendet um alle Trainings eines Schülers zu bekommen.
   * @param alertService wird verwendet um Fehler auf der Oberfläche auszugeben.
   * @param router wird verwendet um bei der Auswahl / Erzeugen eines Trainings direkt in die Bearbeitung des
   * Trainings zu switchen.
   */
  constructor(private accountService: AccountService, private trainingsService: TrainingService, private alertService: AlertService, private router: Router) {
    trainingsService.getAllTrainingsForStudent(accountService.userValue.id).subscribe((training: Training[]) => {
      this.trainingsliste = training
    })
    this.difficultyOptions = [TaskDifficulty.EASY, TaskDifficulty.MEDIUM, TaskDifficulty.HARD];
    this.taskTypeOptions = [TaskCategory.GRAMMATIK, TaskCategory.LUECKENTEXT, TaskCategory.ZEICHENSETZUNG, TaskCategory.GROSS_KLEIN_SCHREIBUNG];

  }

  /**
   * Macht einen Http-Call um auf Basis der Selektoren (Anzahl Fragen, Schwierigkeit und Kategorie) ein Training zu
   * erzeugen. Wird im Html verwendet.
   */
  createTraining() {
    if (this.model.taskAmount < 1) {
      this.alertService.error("Anzahl Fragen muss größer 0 sein.")
      return;
    }
    this.trainingsService.createStudentTraining(this.model).pipe(first()).subscribe((training: Training) => {
      this.router.navigate(['/doTraining/' + training.id]);
    });

  }

  /**
   * Navigiert zum Training bearbeiten. Wird im Html verwendet.
   * @param id des Trainings, welches bearbeitet werden soll.
   */
  startTraining(id: number) {
    this.router.navigate(['/doTraining/' + id]);

  }
}





