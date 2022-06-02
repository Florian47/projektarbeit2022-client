/**
 * In dem Ordner Models werden alle benötigten Schnittstelen definiert die Benötigt werden,
 * um mit dem Server die Daten auszutauschen.
 * Hier Aufgabe definiert
 * ID = eindeutige Identifikation
 * name= Name der Aufgabe
 * text= Textbeschreibung der Aufgabe
 * picture= defintion eines Bildes
 * notUniquiId und Score Wird im Client nicht Benötigt
 * difficulty = Schwierigkeit der Aufgabe definition siehe task.difficulty.ts
 * category= Kategorie der Aufgabe definition siehe task.ctegory.ts
 * solution= Lösung zu der Aufgabe definition siehe solution.ts
 * @author Chris Leon Brinkhoff
 */
import {TaskDifficulty} from "./task.difficulty";
import {TaskCategory} from "./task.category";
import {Solution} from "./solution";

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
