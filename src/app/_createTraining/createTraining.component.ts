import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService, AlertService} from "../_services";
import {first} from "rxjs/operators";
import {TaskService} from "../_services/task.service";
;


@Component({

  templateUrl: './create-dropTraining.component.html',
  styleUrls: ['./create-dropTraining.component.css']
})
export class CreateTrainingComponent implements OnInit {
  form: FormGroup;
  isAddMode: boolean | undefined;
  id: string | undefined;
  loading = false;
  submitted = false;
  tasks:any;
  benutzer:any;
  benutzerliste: string[];
  constructor( private formBuilder: FormBuilder,
               private route: ActivatedRoute,
               private router: Router,
               private taskService: TaskService,
               private alertService: AlertService) {
    this.form = this.formBuilder.group({} );
    this.benutzer = new FormControl();
    this.benutzerliste= ['Chris', 'Linus', 'Arne', 'Flow', 'Jonas', 'Tobi'];

  }
 deleteTraining(id:number){
    this.tasks.splice(id,1);
 }

  ngOnInit(): void {
    this.tasks= [['Aufgabe1','mittel'],['Aufgabe2','leicht'],['Aufgabe3','schwer'],['Aufgabe4','leicht']];
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;

  }






  onSubmit() {



  }


}
