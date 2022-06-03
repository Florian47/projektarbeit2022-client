import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../_services";
import {first} from "rxjs/operators";
import {TaskService} from "../_services/task.service";
import {TaskDifficulty} from "../_models/task.difficulty";
import {TaskCategory} from "../_models/task.category";
import {Task} from "../_models/task";
import {SolutionOptions} from "../_models/solution.options";
import {SolutionGaps} from "../_models/solution.gaps";

;


@Component({

  templateUrl: './create-dropTask.component.html',
  styleUrls: ['./create-dropTask.component.css']
})
/**
 * Stellt die create Task Ansicht bereit. Hier wird die Oberfläche mit der benötigten Logik bereitgestellt.
 * Der Leherer kann hier die Aufgaben erstellen
 * @author Chris Leon Brinkhoff
 */
export class CreateTaskComponent implements OnInit {
  id: number | undefined;
  isAddMode: boolean | undefined;
  loading = false;
  submitted = false;
  isImageSaved: boolean = false;
  cardImageBase64: string = '';
  difficultyOptions: TaskDifficulty[];
  taskTypeOptions: TaskCategory[];
  model : Task = new Task();
  /**
   * Wird beim Erzeugen der Komponente aufgerufen. Füllt die Selektoren für  schwierigkeit und die Kategorie
   * @param formBuilder wird verwendet die Steuerelemente zu Generieren
   * @param router wird verwendet um bei beendigung des erstellen der Aufgabe wieder in den Startbereich zu gelangen
   * @param taskService  stellt funktionen bereit diese werden in _Services -> task.service.ts erläutert
   * @param alertService  stellt die verwendeten alert funktionen bereit diese werden in _Services -> alert.service.ts erläutert
   */

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private taskService: TaskService,
              private alertService: AlertService) {
    this.difficultyOptions = [TaskDifficulty.EASY, TaskDifficulty.MEDIUM, TaskDifficulty.HARD];
    this.taskTypeOptions = [TaskCategory.GRAMMATIK, TaskCategory.LUECKENTEXT, TaskCategory.ZEICHENSETZUNG, TaskCategory.GROSS_KLEIN_SCHREIBUNG];

  }
  /**
   * Hier werden die Bilder welche man auf der Oberfläche über eine Schaltfläche auswählen kann in ein Base64 string
   * umgewandelt um eine Speicherung in der Datenbank zu ermöglichen
   */

  CreateBase64String(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.model.picture=this.cardImageBase64;
          this.isImageSaved = true;
          console.log(imgBase64Path);
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }
  /**
   * Wird beim Start der Komponente aufgerufen und setzt die id
   * den is AddMode dieser wird verwendet um bei der HTML Komponente 2 verschiedene Ansichten zu relisieren
   * Des Weiteren werden die Schwierigkeit und die Kateogorie gesetzt  welche auf der Pberfläche via DropDown ausgewählt werden können
   */

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if(!this.isAddMode) this.taskService.getById(this.id).subscribe(e => this.model = e);
    this.difficultyOptions = [TaskDifficulty.EASY, TaskDifficulty.MEDIUM, TaskDifficulty.HARD];
    this.taskTypeOptions = [TaskCategory.GRAMMATIK, TaskCategory.LUECKENTEXT, TaskCategory.ZEICHENSETZUNG, TaskCategory.GROSS_KLEIN_SCHREIBUNG];

  }

  /**
   * mit hile der Funktion wird dem array eine neue option hinzugefuegt
   * @param zeile gibt dabei die Zeile An an der die Option hinzugefuegt wird
   */

  optionadd(zeile: number) {
    this.model.solution.solutionGaps[zeile].solutionOptions.push(new SolutionOptions())

  }

  /**
   * Hier wird eine option wieder entfernt
   * @param zeile gibt an in welcher Zeile die Option gelöscht werden soll
   * @param option gibt an welche Option entfernt wird
   */

  optiondrop(zeile: number, option: number) {
    {
      if (this.model.solution.solutionGaps[zeile].solutionOptions.length === 1) {
        this.lueckedrop(zeile);
      } else {
        this.model.solution.solutionGaps[zeile].solutionOptions.splice(option, 1);
      }
    }
//    delete this.model.solution.solutionGaps[zeile][option];
  }

  /**
   * Hier wird eine Lücke hinzugefuegt
   * @param maxziele gibt an wie viele Zeilen es schon gibt damit man bei option add direkt die Option hinzufuegen kann
   */

  lueckeadd(maxziele: number) {
    this.model.solution.solutionGaps.push(new SolutionGaps());
    this.optionadd(maxziele)
  }

  /**
   * Hier werden optionen wieder gelöscht
   * @param maxziele gibt dabei an wie viele optionen schon bestehen und welche die letzte ist zum löschen
   */

  lueckedrop(maxziele: number) {
    this.model.solution.solutionGaps.splice(maxziele, 1)
  }

  /**
   * hier wird das verhalten definiert welches geschieht wenn ein Submit button getätigt wird
   * Falls man sich im addMode befindet wird eine Aufgabe erstellt
   * Falls man sich im !addMode befindet wird die bearbeitete task geupdated
   */

  onSubmit() {
    if (this.isAddMode) {
      this.createTask();
    } else {
      this.updateTask();
    }
  }

  /**
   * Hier wird eine neue Aufgabe erstellt Falls ein Fehler ensteht wird dieser mit hilfe des Alert-Services ausgegeben
   *
   */
  private createTask() {
    this.taskService.create(this.model)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Task create successfully', {keepAfterRouteChange: true});
          this.router.navigate(['../'], {relativeTo: this.route});
        },
        error: (error: any) => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  /**
   * Hier wird eine bestehende Aufgabe verändert, ensteht wird dieser mit hilfe des Alert-Services ausgegeben
   *
   */
  private updateTask() {
    this.taskService.update(this.id, this.model)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Update successful', {keepAfterRouteChange: true});
          this.router.navigate(['../../'], {relativeTo: this.route});
        },
        error: (error: any) => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
  /**
   * wird benötigt um den index bei der *For schleife zu erhalten
   */
  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
