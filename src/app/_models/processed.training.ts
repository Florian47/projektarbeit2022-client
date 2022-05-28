import {Task} from "./task";
import {Training} from "./training";

export class ProcessedTraining{
  constructor(public id: number = 0,
              public score: number = 0,
              public processedSolutionTasks: Task[] = [],
              public originTraining: Training = new Training()) {
  }
}
