import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './schueler.component.html',
  styleUrls: ['./schueler.component.css']
})
export class SchuelerComponent implements OnInit {
  trainingsliste: string[];

  constructor() {
    this.trainingsliste=['Training Brinkhoff Grammatik','Training Brinkhoff groß/klein Schreibung']
  }

  ngOnInit(): void {
  }
  onSubmit(){

  }

}
