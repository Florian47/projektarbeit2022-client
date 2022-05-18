import {SolutionGaps} from "./solution.gaps";

export class Solution {
  constructor(public id: number = 0,
              public hint: string = '',
              public solutionGaps: SolutionGaps[] = [],
  ) {

  }

}
