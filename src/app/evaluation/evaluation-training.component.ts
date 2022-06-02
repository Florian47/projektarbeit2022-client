import { Component, OnInit } from '@angular/core';

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
  saleData = [
    { name: "Frage 1", value: 7 },
    { name: "Frage 2", value: 1 },
    { name: "Frage 3", value: 15 },
    { name: "Frage 4", value: 33 },
    { name: "Frage 5", value: 20 }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
