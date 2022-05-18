import {TaskDifficulty} from "./task.difficulty";
import {TaskCategory} from "./task.category";


export class StudentGeneratedTraining{
  constructor(
    public taskAmount:number = 0,
    public trainingDifficulty:TaskDifficulty = TaskDifficulty.EASY,
    public trainingCategory:TaskCategory = TaskCategory.LUECKENTEXT,


  ){}

}
