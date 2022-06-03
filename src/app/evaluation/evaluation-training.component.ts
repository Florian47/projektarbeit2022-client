import {Component, OnInit} from '@angular/core';
import {ProcessedTrainingService} from "../_services";
import {ActivatedRoute} from "@angular/router";
import {ProcessedTraining} from "../_models/processed.training";
import {Task} from "../_models/task"

@Component({
  selector: 'app-evaluation-training',
  templateUrl: './evaluation-training.component.html'
})
/**
 * Stellt die Auswertungs-Komponente bereit. Sowohl die Oberfläche als auch die Logik ist in dieser Komponente
 * verankert. Über die Auswertungs-Komponente kann der Lehrer ein Training auswählen und sich visualiseren lassen,
 * wie häufig eine Aufgabe richtig bzw. falsch beantwortet wurde.
 * @author Florian Weinert
 */
export class EvaluationTrainingComponent implements OnInit {
  model: ProcessedTraining[] = [];

  compareTraining:StatisticData[] = [];

  constructor(private processedTrainingService: ProcessedTrainingService, private route: ActivatedRoute) {

  }

  /**
   * Wird beim Initialiseren der Komponente aufgerufen. Holt sich über den ProcessedTrainingsService alle
   * absolvierten Trainings. Auf dieser Basis wird das Diagramm zum Vergleich der Gesamtpunktzahl mit Daten gefüllt.
   */
  ngOnInit(): void {
    let trainingId: number = +this.route.snapshot.params['id'];

    this.processedTrainingService.retrieveAllProcessedForTrainingId(trainingId).subscribe(procTrainings => {
      this.model = procTrainings;
      this.compareTraining = this.generateTrainingScoreComparisonData(this.model)
    });
  }

  /**
   * Erzeugt eine Liste mit Datensätzen. Die Datensätze bestehen aus dem Benutzernamen des Absolventen des Trainings
   * und deren Punktzahl im bearbeiteten Training.
   * @param data alle bearbeiteten Trainings, welche ausgewertet werden sollen.
   * @private
   */
  private generateTrainingScoreComparisonData(data: ProcessedTraining[]): StatisticData[] {
    let dataStatistic: StatisticData[] = [];
    if(!data || data.length == 0) return dataStatistic;
    dataStatistic.push(new StatisticData(data[0].originTraining.name, data[0].originTraining.score));
    data.forEach(proTraining => {
      dataStatistic.push(new StatisticData(proTraining.studentId.toString(),proTraining.score))
    });
    return dataStatistic;
  }

  /**
   * Sucht aus allen bearbeiteten Trainings (Siehe Param) nach der Aufgabe (Siehe Param) und gibt eine Liste an
   * Datensätzen mit der erreichten Punktzahl und dessen Bearbeiter zurück. Wird im Html verwendet.
   * @param task
   * @param data alle bearbeiteten Trainings, welche ausgewertet werden sollen.
   */
  public generateTaskScoreComparisonData(task: Task, data: ProcessedTraining[]): StatisticData[] {
    let dataStatistic: StatisticData[] = [];
    if(!data || data.length == 0) return dataStatistic;
    data.forEach(singleProcTraining => {
      dataStatistic.push(new StatisticData(singleProcTraining.studentId+"", singleProcTraining.processedSolutionTasks.find(procTask => procTask.notUniqueId === task.notUniqueId)!.score));
    })
    return dataStatistic;
  }

}

/**
 * Wird verwendet um die Diagramme mit Daten zu füttern.
 * @author Florian Weinert
 */
export class StatisticData {
  public name: string;
  public value: number;

  constructor(pName: string, pValue: number) {
    this.name = pName;
    this.value = pValue;
  }
}
