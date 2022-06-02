
/**
 * In dem Ordner Models werden alle benötigten Schnittstelen definiert die Benötigt werden,
 * um mit dem Server die Daten auszutauschen.
 * Hier wird die Lösung definiert
 * id= eindeutige Indetifikation
 * hint= Lösungshinweiß zur Aufgabe
 * notUiquiId = wird im Client nihct benötigt
 * solutionGaps = Array mit den Lösungen definiert in solution.gaps.ts
 *
 * @author Chris Leon Brinkhoff
 */import {SolutionGaps} from "./solution.gaps";

export class Solution {
  constructor(public id: number = 0,
              public hint: string = '',
              public notUniqueId: string='',
              public solutionGaps: SolutionGaps[] = [],
  ) {

  }

}
