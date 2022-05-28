import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService, ProcessedTrainingService} from "../_services";
import {first} from "rxjs/operators";
import {ProcessedTraining} from "../_models/processed.training";


@Component({

  templateUrl: './doTraining.component.html'
})
export class DoTrainingComponent implements OnInit {
  form: FormGroup;
  model: ProcessedTraining;
  displayStyle: string | undefined;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private processedTrainingService: ProcessedTrainingService,
              public alertService: AlertService,) {
    this.model = new ProcessedTraining();
    this.form = this.formBuilder.group({});
  }


  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.processedTrainingService.createProcessableTraining(id).pipe(first()).subscribe(training => {
      this.model = training;
      console.log(this.model);
    });
  }

  onSubmit() {
    this.processedTrainingService.update(this.model.id, this.model).subscribe(msg => this.router.navigate(['/schueler']));
  }

}
