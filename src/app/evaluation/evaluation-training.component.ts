import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation-training',
  templateUrl: './evaluation-training.component.html'
})
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
