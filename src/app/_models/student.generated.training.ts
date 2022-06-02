
/**
 * In dem Ordner Models werden alle benötigten Schnittstelen definiert die Benötigt werden,
 * um mit dem Server die Daten auszutauschen.
 * Hier wird das Schueler erstellte Training definiert
 * taskAmount= Die Anzahl an benötigten Aufgaben
 * TrainingDifficulty= Schwierigkeit des Trainings
 * TrainingCategorie = Kategorie des Trainings
 *
 * @author Chris Leon Brinkhoff
 */
import {TaskDifficulty} from "./task.difficulty";
import {TaskCategory} from "./task.category";


export class StudentGeneratedTraining{
  constructor(
    public taskAmount:number = 1,
    public trainingDifficulty:TaskDifficulty = TaskDifficulty.EASY,
    public trainingCategory:TaskCategory = TaskCategory.LUECKENTEXT,


  ){}

}
