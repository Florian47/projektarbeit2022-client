
import {User} from "./user";
import {Task} from "./task";
/**
 * In dem Ordner Models werden alle benötigten Schnittstelen definiert die Benötigt werden,
 * um mit dem Server die Daten auszutauschen.
 * Hier wird das Training definiert
 * @param id = eindeutige Indentifikation
 * @param name = name des Trainings
 * @param students = array der Schueler die das Training bearbeiten
 * @param individual = Wahrheitswert ib es sich um ein vom Lehere erstelltres Training handelt
 * @param tasks = Die Tasks die das Training Beinhaltet definition siehe task.ts
 *
 * @author Chris Leon Brinkhoff
 */
export class Training {
  constructor(public id: number=0,
              public name:string='',
              public students: User[] = [],
              public score: number = 0,
              public individual: boolean= false,
              public tasks: Task[]=[]) {
  }
}
