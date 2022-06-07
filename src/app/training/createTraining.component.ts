import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService, AlertService} from "../_services";
import {first} from "rxjs/operators";
import {TaskService} from "../_services/task.service";
import {TaskDifficulty} from "../_models/task.difficulty";
import {TaskCategory} from "../_models/task.category";
import {Training} from "../_models/training";
import {TrainingService} from "../_services/training.service";
import {User} from "../_models";
import {Task} from "../_models/task";


@Component({

  templateUrl: './create-dropTraining.component.html'
})
/**
 * Stellt die create Training Ansicht bereit.Hier wird die Oberfläche mit der benötigten Logik bereitgestellt.
 * Der Leherer kann hier Trainings für Schueler erstellen.
 * @author Chris Leon Brinkhoff
 */
export class CreateTrainingComponent implements OnInit {
  isAddMode: boolean | undefined;
  id: number = 0;
  loading = false;
  submitted = false;
  tasks: Task[] = [];

  benutzer: any;
  benutzerliste: User[] = [];
  difficultyOptions: TaskDifficulty[];
  taskTypeOptions: TaskCategory[];
  model: Training = new Training();

  /**
   * Wird beim Erzeugen der Komponente aufgerufen. Füllt die Selektoren für  den
   * Benutzer, Schwierigkeit, Kategorie und die wahrheitswert der angibt das es sich hierbei immer um ein Individualtraining handelt
   * @param formBuilder wird verwendet die Steuerelemente zu Generieren
   * @param route wird verwendet um in der Url Zeile immer die aktuelle Url anzuzeigen
   * @param router wird verwendet um nach erstellen eines Trainings wieder in den Startbereich zu gelangen
   * @param trainingService stellt funktionen bereit diese werden in _Services -> training.service.ts erläutert
   * @param alertService stellt funktionen bereit diese werden in _Services -> alert.service.ts erläutert
   * @param userServicestellt funktionen bereit diese werden in _Services -> user.service.ts erläutert
   * @param taskService stellt funktionen bereit diese werden in _Services -> task.service.ts erläutert
   */
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private trainingService: TrainingService,
              private alertService: AlertService,
              private userService: AccountService,
              private taskService: TaskService,
  ) {
    this.benutzer = new FormControl();
    userService.getAll().subscribe(event => this.benutzerliste = event);
    taskService.getAll().subscribe(event2 => this.tasks = event2);
    this.difficultyOptions = [TaskDifficulty.EASY, TaskDifficulty.MEDIUM, TaskDifficulty.HARD];
    this.taskTypeOptions = [TaskCategory.GRAMMATIK, TaskCategory.LUECKENTEXT, TaskCategory.ZEICHENSETZUNG, TaskCategory.GROSS_KLEIN_SCHREIBUNG];
    this.model.individual = true;
  }

  /**
   * Wird beim Start der Komponente aufgerufen und setzt die id
   * is AddMode wird = !=isaddMode gesetzt da wir jetzt die Aufgabe nicht mehr hinzufuegen sondern ändern wollen. Dies hat zufolge, das in der HTML Komponente andere If statements greifen.
   *
   * Des Weiteren wird das Training in das Model geladen
   */
  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if (!this.isAddMode) this.trainingService.getById(this.id).subscribe(e => this.model = e);
  }

  /**
   * hier wird das verhalten definiert welches geschieht wenn ein Submit button getätigt wird
   * Falls man sich im addMode befindet wird eine Aufgabe erstellt
   * Falls man sich im !addMode befindet wird die bearbeitete task geupdated
   */

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid


    this.loading = true;
    if (this.isAddMode) {
      this.createTraining();
    } else {
      this.updateTraining();
    }
  }
  /**
   * Hier wird eine neues Training erstellt Falls ein Fehler ensteht wird dieser mit hilfe des Alert-Services ausgegeben
   *
   */

  private createTraining() {
    this.trainingService.create(this.model)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Training wurde erfolgreich erstellt.', {keepAfterRouteChange: true});
          this.router.navigate(['../'], {relativeTo: this.route});
        },
        error: (error: any) => {
          this.loading = false;
        }
      });
  }



  /**
   * Hier wird eine bestehendes Training verändert, ensteht wird dieser mit hilfe des Alert-Services ausgegeben
   *
   */
  private updateTraining() {
    this.trainingService.update(this.id, this.model)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Update erfolgreich', {keepAfterRouteChange: true});
          this.router.navigate(['../../'], {relativeTo: this.route});
        },
        error: (error: any) => {
          this.loading = false;
        }
      });
  }

  /**
   * Hier wird geprüft ob
   * @param task
   */
  clickTask(task: Task) {

    if (this.hasTask(task)) { //Autor by Flow
      this.model.tasks = this.model.tasks.filter(e => e !== task)//Name von dem parameter kann auch anders gennant werden
    } else {
      this.model.tasks.push(task);
    }


  }



  hasTask(task: Task) {//Autor by Flow
    return this.model.tasks.filter(e => e.id === task.id).length > 0;
  }

  /**
   * Hier werden 2 benutzer auf gleichheit inklusive des typs geprüft
   * @param user1 erster user
   * @param user2 zweiter user
   */

  compareUser(user1: User, user2: User){
    return user1.id === user2.id;
  }

}
