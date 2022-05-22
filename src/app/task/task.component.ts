import {Component, OnInit} from '@angular/core';
import {TaskService} from "../_services/task.service";

import {Task} from "../_models/task";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-task-table',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  tasks: Task[] =[];


  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getAll().subscribe(e => this.tasks = e);
  }

  deleteTask(id: number) {
    this.taskService.delete(id).pipe(first()).subscribe(() => this.tasks = this.tasks.filter((x: Task) => x.id !== id))
  }

}
