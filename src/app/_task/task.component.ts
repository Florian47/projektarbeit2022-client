import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {TaskService} from "../_services/task.service";

import {Task} from "../_models/task";
@Component({
  selector: 'app-task-table',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  isAddMode: boolean | undefined;
  isCreateMode: boolean | undefined;
  tasks:any |undefined;
  benutzer:any;
  benutzerliste: string[];
  model: Task= new Task();


  constructor(private taskService: TaskService) {
    this.benutzer = new FormControl();
    this.benutzerliste= ['Chris', 'Linus', 'Arne', 'Flow', 'Jonas', 'Tobi'];

  }

  ngOnInit(): void {
    // this.tasks= [['Aufgabe1','mittel'],['Aufgabe2','leicht'],['Aufgabe3','schwer'],['Aufgabe4','leicht']];
    this.taskService.getAll().subscribe(e => this.tasks = e);
  }
  deleteTask(pos:number){
    this.tasks.splice(pos,1)
  }

}
