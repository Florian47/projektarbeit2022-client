import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Training} from "../_models/training";
import {TrainingService} from "../_services/training.service";
import {Task} from "../_models/task";

@Component({
  selector: 'app-task-table',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
  isAddMode: boolean | undefined;
  isCreateMode: boolean | undefined;
  trainings:Training[] = [];
  benutzer:any;
  benutzerliste: string[];
  model: Task = new Task();
  constructor(private trainingService: TrainingService) {
    this.benutzer = new FormControl();
    this.benutzerliste= ['Chris', 'Linus', 'Arne', 'Flow', 'Jonas', 'Tobi'];

  }

  ngOnInit(): void {
    this.trainingService.getAll().subscribe(e => this.trainings = e);
  }
  deleteTask(pos:number){
    this.trainings.splice(pos,1)
  }

}
