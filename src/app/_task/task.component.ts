import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-task-table',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  isAddMode: boolean | undefined;
  isCreateMode: boolean | undefined;
  tasks:any;
  benutzer:any;
  benutzerliste: string[];

  constructor() {
    this.benutzer = new FormControl();
    this.benutzerliste= ['Chris', 'Linus', 'Arne', 'Flow', 'Jonas', 'Tobi'];

  }

  ngOnInit(): void {
    this.tasks= [['Aufgabe1','mittel'],['Aufgabe2','leicht'],['Aufgabe3','schwer'],['Aufgabe4','leicht']];

  }
  deleteTask(pos:number){
    this.tasks.splice(pos,1)
  }

}
