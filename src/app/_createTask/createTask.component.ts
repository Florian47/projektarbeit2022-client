import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../_services";
import {first} from "rxjs/operators";
import {TaskService} from "../_services/task.service";
import {TaskDifficulty} from "../_models/task.difficulty";
import {TaskCategory} from "../_models/task.category";
import {Task} from "../_models/task";

;


@Component({

  templateUrl: './create-dropTask.component.html',
  styleUrls: ['./create-dropTask.component.css']
})
export class CreateTaskComponent implements OnInit {
  taskForm: FormGroup;
  id: string | undefined;
  isAddMode: boolean | undefined;
  loesungen: any;
  loading = false;
  submitted = false;
  isImageSaved: boolean = false;
  cardImageBase64: string = '';
  difficultyOptions: TaskDifficulty[];
  taskTypeOptions: TaskCategory[];
  model : Task | undefined;

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private taskService: TaskService,
              private alertService: AlertService) {
    this.taskForm = this.formBuilder.group({});
    this.difficultyOptions = [TaskDifficulty.EASY, TaskDifficulty.MEDIUM, TaskDifficulty.HARD];
    this.taskTypeOptions = [TaskCategory.GRAMMATIK, TaskCategory.LUECKENTEXT, TaskCategory.ZEICHENSETZUNG, TaskCategory.GROSS_KLEIN_SCHREIBUNG];
    //this.model = undefined;
  }

  CreateBase64String(fileInput: any) {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {
          const imgBase64Path = e.target.result;
          this.cardImageBase64 = imgBase64Path;
          this.isImageSaved = true;
          console.log(imgBase64Path);
        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.loesungen = [[[true, 'option1'], [false, 'option2']], [[true, 'option3'], [false, 'option4']]]
    this.difficultyOptions = [TaskDifficulty.EASY, TaskDifficulty.MEDIUM, TaskDifficulty.HARD];
    this.taskTypeOptions = [TaskCategory.GRAMMATIK, TaskCategory.LUECKENTEXT, TaskCategory.ZEICHENSETZUNG, TaskCategory.GROSS_KLEIN_SCHREIBUNG];
    /*if (!this.isAddMode) {
      this.taskService.getById(<string>this.id)
        .pipe(first())
        .subscribe((x: { [key: string]: any; }) => this.form.patchValue(x));
    }*/
    //this.form.patchValue({title:'TestTitle',schwierigkeitsgrad:'schwierig',loesung:[[true,'option1'],[false,'option2']]})
  }

  optionadd(zeile: number) {
    this.loesungen[zeile].push([false, '']);
  }

  optiondrop(zeile: number, option: number) {
    {
      if (option == 0) {
        this.lueckedrop(zeile);
      } else {
        this.loesungen[zeile].splice(option, 1);
      }

    }

    delete this.loesungen[zeile][option];
  }

  lueckeadd(maxziele: number) {
    this.loesungen.push([]);
    this.optionadd(maxziele)

  }

  lueckedrop(maxziele: number) {
    this.loesungen.splice(maxziele - 1, 1)


  }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.taskForm.invalid) {
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
    this.taskService.create(this.taskForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Task create successfully', {keepAfterRouteChange: true});
          this.router.navigate(['../'], {relativeTo: this.route});
        },
        error: (error: any) => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

  private updateTask() {
    this.taskService.update(this.id, this.taskForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success('Update successful', {keepAfterRouteChange: true});
          this.router.navigate(['../../'], {relativeTo: this.route});
        },
        error: (error: any) => {
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }

}
