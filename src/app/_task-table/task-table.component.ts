import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-table',
  templateUrl: './tasktable.component.html',
  styleUrls: ['./tasktable.component.css']
})
export class TaskTableComponent implements OnInit {
  isAddMode: boolean | undefined;
  isCreateMode: boolean | undefined;
  tasks:any;

  constructor() {

  }

  ngOnInit(): void {
    this.tasks= [['Aufgabe1',12345],['Aufgabe2',456],['Aufgabe3',4687],['aufgabe4',454]];
  }
  deleteTask(pos:number){
    this.tasks.splice(pos,1)
  }

}
