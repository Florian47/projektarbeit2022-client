import { Component, OnInit } from '@angular/core';
import {TaskDifficulty} from "../_models/task.difficulty";
import {TaskCategory} from "../_models/task.category";


@Component({
  selector: 'app-html',
  templateUrl: './schueler.component.html',
  styleUrls: ['./schueler.component.css']
})
export class SchuelerComponent implements OnInit {
  trainingsliste: string[];
  // @ts-ignore
  model: task = new task();
  difficultyOptions: TaskDifficulty[];
  taskTypeOptions: TaskCategory[];


  constructor() {
    this.trainingsliste=['Training Brinkhoff Grammatik','Training Brinkhoff groß/klein Schreibung']
    this.difficultyOptions = [TaskDifficulty.EASY, TaskDifficulty.MEDIUM, TaskDifficulty.HARD];
    this.taskTypeOptions = [TaskCategory.GRAMMATIK, TaskCategory.LUECKENTEXT, TaskCategory.ZEICHENSETZUNG, TaskCategory.GROSS_KLEIN_SCHREIBUNG];
  }

  ngOnInit(): void {
  }
  onSubmit(){

  }

}
