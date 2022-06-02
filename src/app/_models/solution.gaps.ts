/**
 * In dem Ordner Models werden alle benötigten Schnittstelen definiert die Benötigt werden,
 * um mit dem Server die Daten auszutauschen.
 * Hier werden die Lücken definiert
 *
 * id = id zur identifikation
 * Not UniqueId = nicht genutzt auf Client Seite
 * solutionOptions= array der Options definition der Options siehe solution.options.ts
 *
 * @author Chris Leon Brinkhoff
 */

import {SolutionOptions} from "./solution.options";

export class SolutionGaps {
  constructor(public id: number = 0,
              public notUniqueId: string = '',
              public solutionOptions: SolutionOptions[] = [],
  ) {
  }
}
