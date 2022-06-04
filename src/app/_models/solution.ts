
import {SolutionGaps} from "./solution.gaps";
/**
 * In dem Ordner Models werden alle benötigten Schnittstelen definiert die Benötigt werden,
 * um mit dem Server die Daten auszutauschen.
 * Hier wird die Lösung definiert
 * @param id = eindeutige Indetifikation
 * @param hint = Lösungshinweiß zur Aufgabe
 * @param notUiquiId = wird im Client nihct benötigt
 * @param solutionGaps = Array mit den Lösungen definiert in solution.gaps.ts
 *
 * @author Chris Leon Brinkhoff
 */
export class Solution {
  constructor(public id: number = 0,
              public hint: string = '',
              public notUniqueId: string='',
              public solutionGaps: SolutionGaps[] = [],
  ) {

  }

}
