import {Component, OnInit} from '@angular/core';
import {TaskService} from "../_services/task.service";

import {Task} from "../_models/task";
import {first} from "rxjs/operators";
/**
 * Stellt die  Task Ansicht bereit.Hier wird die Oberfläche mit der benötigten Logik bereitgestellt.
 * Der Leherer kann hier die erstellten aufgaben ansehen
 * @author Chris Leon Brinkhoff
 */
@Component({
  selector: 'app-task-table',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  tasks: Task[] =[];

  /**
   *
   * @param taskService stellt funktionen bereit diese werden in _Services -> task.service.ts erläutert
   */
  constructor(private taskService: TaskService) {
  }
  /**
   * Wird beim Start der Komponente aufgerufen und holt sich alle task vom Server und listet diese auf
   *
   * **/

  ngOnInit(): void {
    this.taskService.getAll().subscribe(e => this.tasks = e);
  }

  /**
   * mit hilfe der delete Funktion kann man task aus der liste entfernen
   * @param id die id gibt an welche Task gelöscht werden soll
   */

  deleteTask(id: number) {
    this.taskService.delete(id).pipe(first()).subscribe(() => this.tasks = this.tasks.filter((x: Task) => x.id !== id))
  }

}
