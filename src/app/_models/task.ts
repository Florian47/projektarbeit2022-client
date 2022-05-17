import {TaskDifficulty} from "./task.difficulty";
import {TaskCategory} from "./task.category";
import {Solution} from "./solution";

export class Task {
  constructor(public id: number = 0,
              public name: string = '',
              public text: string = '',
              public picture: string = '',
              public score: number = 0,

              public difficulty: TaskDifficulty = TaskDifficulty.EASY,
              public category: TaskCategory = TaskCategory.LUECKENTEXT,
              public solution:Solution = new Solution()
  ) {
  }
}
