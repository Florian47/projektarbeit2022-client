/**
 * In dem Ordner Models werden alle benötigten Schnittstelen definiert die Benötigt werden,
 * um mit dem Server die Daten auszutauschen.
 * Hier das durchgefprte Training mit allen bestandteielen definiert.
 * id= Id des Trainings
 * Score= Punktzahl
 * ProcessedSolutionTask= hier werden die Aufgaben gespeichert
 * Training= Hier werden die Daten zu dem Training definiert Definition des Trainings siehe training.ts
 *
 * @author Chris Leon Brinkhoff
 */
import {Task} from "./task";
import {Training} from "./training";

export class ProcessedTraining{
  constructor(public id: number = 0,
              public score: number = 0,
              public processedSolutionTasks: Task[] = [],
              public originTraining: Training = new Training()) {
  }
}
