import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService, ProcessedTrainingService} from "../_services";
import {first} from "rxjs/operators";
import {ProcessedTraining} from "../_models/processed.training";


@Component({

  templateUrl: './doTraining.component.html', styleUrls: ['./doTraining.component.css']
})
/**
 * Stellt die absolviere Training Ansicht bereit.Hier wird die Oberfläche mit der benötigten Logik bereitgestellt.
 * Der Schueler kann hier ein Training absolvieren und somit nach erfolgter bearbeitung der Aufgaben das Training Speichern
 * @author Chris Leon Brinkhoff
 */
export class DoTrainingComponent implements OnInit {
  form: FormGroup;
  model: ProcessedTraining;
  displayStyle: string | undefined;
  /**
   * Wird beim Erzeugen der Komponente aufgerufen. Füllt die Selektoren für  das Model und die Form
   * @param formBuilder wird verwendet die Steuerelemente zu Generieren
   * @param router wird verwendet um bei beendigung des Trainings wieder in den Startbereich zu gelangen
   * @param processedTrainingService  stellt funktionen bereit diese werden in _Services -> processed.training.service.ts erläutert
   * @param alertService  stellt die verwendeten alert funktionen bereit diese werden in _Services -> alert.service.ts erläutert
   */
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private processedTrainingService: ProcessedTrainingService,
              public alertService: AlertService,) {
    this.model = new ProcessedTraining();
    this.form = this.formBuilder.group({});
  }
/**
  * Wird beim Start der Komponente aufgerufen und setzt das Training und id

*/

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.processedTrainingService.createProcessableTraining(id).pipe(first()).subscribe(training => {
      this.model = training;
      console.log(this.model);
    });
  }
  /**
   * definiert den Fall, das auf der Oberfläche ein submit button gedrückt wird in diesem Fall speicherung des Trainings
   *
   */

  onSubmit() {
    this.processedTrainingService.update(this.model.id, this.model).subscribe(msg => this.router.navigate(['/schueler']));
  }
  /**
   * wird benötigt um den index bei der *For schleife zu erhalten
   */
  trackByIndex(index: number, obj: any): any {
    return index;
  }

}
