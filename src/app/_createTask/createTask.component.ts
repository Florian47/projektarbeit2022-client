import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService, AlertService} from "../_services";
import {first} from "rxjs/operators";
import {TaskService} from "../_services/task.service";
;


@Component({

  templateUrl: './create-dropTask.component.html',
  styleUrls: ['./create-dropTask.component.css']
})
export class CreateTaskComponent implements OnInit {
  form: FormGroup;
  id: string | undefined;
  isAddMode: boolean | undefined;
  loesungen: any;
  loading = false;
  submitted = false;
  constructor( private formBuilder: FormBuilder,
               private route: ActivatedRoute,
               private router: Router,
               private taskService: TaskService,
               private alertService: AlertService) {
    this.form = this.formBuilder.group({} );

  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.loesungen=[[[true,'option1'],[false,'option2']],[[true,'option3'],[false,'option4']]]
    /*if (!this.isAddMode) {
      this.taskService.getById(<string>this.id)
        .pipe(first())
        .subscribe((x: { [key: string]: any; }) => this.form.patchValue(x));
    }*/
    //this.form.patchValue({title:'TestTitle',schwierigkeitsgrad:'schwierig',loesung:[[true,'option1'],[false,'option2']]})
  }
  optionadd(zeile:number){
    this.loesungen[zeile].push([false,'']);
  }
  optiondrop(zeile:number,option:number){
     {
       if(option==0){
         this.lueckedrop(zeile);
       }else {
         this.loesungen[zeile].splice(option,1);
       }

    }

    delete  this.loesungen[zeile][option];
  }
  lueckeadd(maxziele:number){
    this.loesungen.push([]);
    this.optionadd(maxziele)

  }
  lueckedrop(maxziele:number){
 this.loesungen.splice(maxziele-1,1)


  }
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this.createTask();
    } else {
      this.updateTask();
    }
  }
  private createTask() {
    this.taskService.create(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Task create successfully', { keepAfterRouteChange: true });
          this.router.navigate(['../'], { relativeTo: this.route });
        },
        error: (error: any) => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  private updateTask() {
    this.taskService.update(this.id, this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Update successful', { keepAfterRouteChange: true });
          this.router.navigate(['../../'], { relativeTo: this.route });
        },
        error: (error: any) => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

}
