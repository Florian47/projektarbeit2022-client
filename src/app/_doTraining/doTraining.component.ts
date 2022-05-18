import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService, AlertService} from "../_services";
import {first} from "rxjs/operators";
import {TaskService} from "../_services/task.service";
import {TrainingService} from "../_services/training.service";
import {Training} from "../_models/training";
import {Task} from "../_models/task";



@Component({

  templateUrl: './doTraining.component.html',
  styleUrls: ['./doTraining.component.css']
})
export class DoTrainingComponent implements OnInit {
  form: FormGroup;
  model: Training;
  loading = false;
  submitted = false;
  displayStyle: string | undefined;

  constructor( private formBuilder: FormBuilder,
               private route: ActivatedRoute,
               private router: Router,
               private trainingService: TrainingService,
               public alertService: AlertService,) {
    this.model = new Training();
    this.form = this.formBuilder.group({} );
  }


  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.trainingService.getById(id).pipe(first()).subscribe(training => {
      this.model= training;
      console.log(this.model.tasks);
    });

}

  onSubmit() {
  }

}
