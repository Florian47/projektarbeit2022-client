import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService, AlertService} from "../_services";
import {first} from "rxjs/operators";
import {TaskService} from "../_services/task.service";

;


@Component({

  templateUrl: './doTraining.component.html',
  styleUrls: ['./doTraining.component.css']
})
export class DoTrainingComponent implements OnInit {
  form: FormGroup;
  id: string | undefined;
  isAddMode: boolean | undefined;
  bild: string | undefined
  loading = false;
  submitted = false;
  taskText:String | undefined
  aufgaben: any;
  displayStyle: any;
  constructor( private formBuilder: FormBuilder,
               private route: ActivatedRoute,
               private router: Router,
               private taskService: TaskService,
               private alertService: AlertService) {
    this.form = this.formBuilder.group({} );
    let displayStyle = "none";



  }


  ngOnInit(): void {
    var aufgabe1 = {id: 1, name: 'Aufgabe 1', taskText:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ',
      loesungen: [[false,'option1'],[false,'option2'],[false,'option3'],[false,'option4']]};
    var aufgabe2 = {id: 2, name: 'Aufgabe 2', taskText:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ',
      loesungen: [[false,'option1'],[false,'option2'],[false,'option3'],[false,'option4']]};
    var aufgabe3 = {id: 3, name: 'Aufgabe 3', taskText:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ',
      loesungen: [[false,'option1'],[false,'option2'],[false,'option3'],[false,'option4']]};
    var aufgabe4 = {id: 4, name: 'Aufgabe 4', taskText:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ',
      loesungen: [[false,'option1'],[false,'option2'],[false,'option3'],[false,'option4']]};
    this.aufgaben = [aufgabe1, aufgabe2, aufgabe3, aufgabe4];


this.bild='/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2NjIpLCBxdWFsaXR5ID0gODIK/9sAQwAGBAQFBAQGBQUFBgYGBwkOCQkICAkSDQ0KDhUSFhYVEhQUFxohHBcYHxkUFB0nHR8iIyUlJRYcKSwoJCshJCUk/9sAQwEGBgYJCAkRCQkRJBgUGCQkJCQkJCQkJCQkJCQkJCQ...';
  }

  onSubmit() {



  }


  openPopup() {
    this.displayStyle = "block";
  }

  closePopup() {
    this.displayStyle = "none";
  }
}
