import {TaskDifficulty} from "./task.difficulty";
import {TaskCategory} from "./task.category";

export class Task {
  constructor(public id: number,
              public name: string,
              public text: string,
              public picture: string,
              public score: number,
              public difficulty: TaskDifficulty,
              public category: TaskCategory,
  ) {
  }
}
