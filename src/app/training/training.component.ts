import { Component, OnInit } from '@angular/core';
import {Training} from "../_models/training";
import {TrainingService} from "../_services/training.service";
import {Task} from "../_models/task";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-task-table',
  templateUrl: './training.component.html'
})
export class TrainingComponent implements OnInit {
  trainings:Training[] = [];
  model: Task = new Task();
  constructor(private trainingService: TrainingService) {
  }

  ngOnInit(): void {
    this.trainingService.getAllIndividuell().subscribe(e => this.trainings = e);
  }
  deleteTraining(id:number){
    this.trainingService.delete(id).pipe(first()).subscribe(() => this.trainings = this.trainings.filter((x: Training) => x.id !== id));
  }

}
