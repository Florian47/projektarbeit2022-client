
import {TaskDifficulty} from "./task.difficulty";
import {TaskCategory} from "./task.category";


/**
 * In dem Ordner Models werden alle benötigten Schnittstelen definiert die Benötigt werden,
 * um mit dem Server die Daten auszutauschen.
 * Hier wird das Schueler erstellte Training definiert
 * @param taskAmount = Die Anzahl an benötigten Aufgaben
 * @param TrainingDifficulty = Schwierigkeit des Trainings
 * @param TrainingCategorie = Kategorie des Trainings
 *
 * @author Chris Leon Brinkhoff
 */
export class StudentGeneratedTraining{
  constructor(
    public taskAmount:number = 1,
    public trainingDifficulty:TaskDifficulty = TaskDifficulty.EASY,
    public trainingCategory:TaskCategory = TaskCategory.LUECKENTEXT,


  ){}

}
