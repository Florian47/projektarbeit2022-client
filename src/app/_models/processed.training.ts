
import {Task} from "./task";
import {Training} from "./training";
import {User} from "./user";
/**
 * In dem Ordner Models werden alle benötigten Schnittstelen definiert die Benötigt werden,
 * um mit dem Server die Daten auszutauschen.
 * Hier das durchgefprte Training mit allen bestandteielen definiert.
 * @param id = Id des Trainings
 * @param Score = Punktzahl
 * @param ProcessedSolutionTask = hier werden die Aufgaben gespeichert
 * @param Training = Hier werden die Daten zu dem Training definiert Definition des Trainings siehe training.ts
 *
 * @author Chris Leon Brinkhoff
 */
export class ProcessedTraining{
  constructor(public id: number = 0,
              public score: number = 0,
              public processedSolutionTasks: Task[] = [],
              public student:User = new User(),
              public originTraining: Training = new Training()) {
  }
}
