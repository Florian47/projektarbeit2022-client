import { Component, OnInit } from '@angular/core';
import {first} from "rxjs/operators";

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
export class EvaluationTrainingListComponent implements OnInit {
  trainings: any;
  constructor() {
    this.trainings = [{name:"Training 1", id:1}, {name:"Training 2", id:2}, {name:"Training 3", id:3},{name:"Training 4", id:4}]
  }

  ngOnInit(): void {
    // this.accountService.getAll()
    //   .pipe(first())
    //   .subscribe((users) => this.users = users);
  }

}
