

import {SolutionOptions} from "./solution.options";
/**
 * In dem Ordner Models werden alle benötigten Schnittstelen definiert die Benötigt werden,
 * um mit dem Server die Daten auszutauschen.
 * Hier werden die Lücken definiert
 *
 * @param id = id zur identifikation
 * @param NotUniqueId = nicht genutzt auf Client Seite
 * @param solutionOptions = array der Options definition der Options siehe solution.options.ts
 *
 * @author Chris Leon Brinkhoff
 */

export class SolutionGaps {
  constructor(public id: number = 0,
              public notUniqueId: string = '',
              public solutionOptions: SolutionOptions[] = [],
  ) {
  }
}
