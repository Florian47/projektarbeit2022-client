import {SolutionOptions} from "./solution.options";

export class SolutionGaps {
  constructor(public id: number = 0,
              public notUniqueId: string = '',
              public solutionOptions: SolutionOptions[] = [],
  ) {
  }
}
