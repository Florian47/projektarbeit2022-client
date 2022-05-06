import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-task-table',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit {
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
    this.tasks= [['Training1','mittel'],['Training2','leicht'],['Training3','schwer'],['Training4','leicht']];

  }
  deleteTask(pos:number){
    this.tasks.splice(pos,1)
  }

}
