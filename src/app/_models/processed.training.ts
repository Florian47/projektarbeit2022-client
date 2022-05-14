import {Training} from "./training";
import {ProcessedSolutionTasks} from "./processed.solution.tasks";

export class ProcessedTraining {
  constructor(
    id: number,
    score: number,
    originTraining: Training,
    processedSolutionTasks: ProcessedSolutionTasks[]
  ) {
  }
}
