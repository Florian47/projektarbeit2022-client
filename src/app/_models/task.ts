
import {TaskDifficulty} from "./task.difficulty";
import {TaskCategory} from "./task.category";
import {Solution} from "./solution";
/**
 * In dem Ordner Models werden alle benötigten Schnittstelen definiert die Benötigt werden,
 * um mit dem Server die Daten auszutauschen.
 * Hier Aufgabe definiert
 * @param ID = eindeutige Identifikation
 * @param name = Name der Aufgabe
 * @param text = Textbeschreibung der Aufgabe
 * @param picture = defintion eines Bildes
 * @param notUniquiId und Score Wird im Client nicht Benötigt
 * @param difficulty = Schwierigkeit der Aufgabe definition siehe task.difficulty.ts
 * @param category = Kategorie der Aufgabe definition siehe task.ctegory.ts
 * @param solution = Lösung zu der Aufgabe definition siehe solution.ts
 * @author Chris Leon Brinkhoff
 */
export class Task {
  constructor(public id: number = 0,
              public name: string = '',
              public text: string = '',
              public picture: string = '',
              public notUniqueId: string = '',
              public score: number = 0,
              public difficulty: TaskDifficulty = TaskDifficulty.EASY,
              public category: TaskCategory = TaskCategory.LUECKENTEXT,
              public solution:Solution = new Solution()
  ) {
  }
}
