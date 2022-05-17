import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AccountService, AlertService} from "../_services";
import {first} from "rxjs/operators";
import {TaskService} from "../_services/task.service";
import {TaskDifficulty} from "../_models/task.difficulty";
import {TaskCategory} from "../_models/task.category";
import {Training} from "../_models/training";
import {TrainingService} from "../_services/training.service";
import {User} from "../_models";
import {Task} from "../_models/task";



@Component({

  templateUrl: './create-dropTraining.component.html',
  styleUrls: ['./create-dropTraining.component.css']
})
export class CreateTrainingComponent implements OnInit {
  form: FormGroup;
  isAddMode: boolean | undefined;
  id: number =0;
  loading = false;
  submitted = false;
  tasks: Task[] = [];
  hint:string='';
  benutzer: any;
  benutzerliste: User[] = [];
  difficultyOptions: TaskDifficulty[];
  taskTypeOptions: TaskCategory[];
  model: Training = new Training();

  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private trainingService: TrainingService,
              private alertService: AlertService,
              private userService: AccountService,
              private taskService: TaskService,
  ) {
    this.form = this.formBuilder.group({});
    this.benutzer = new FormControl();
    userService.getAll().subscribe(event => this.benutzerliste = event);
    taskService.getAll().subscribe(event2 => this.tasks = event2);
    this.difficultyOptions = [TaskDifficulty.EASY, TaskDifficulty.MEDIUM, TaskDifficulty.HARD];
    this.taskTypeOptions = [TaskCategory.GRAMMATIK, TaskCategory.LUECKENTEXT, TaskCategory.ZEICHENSETZUNG, TaskCategory.GROSS_KLEIN_SCHREIBUNG];
    this.model.individual = true;
  }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    if(!this.isAddMode) this.trainingService.getById(this.id).subscribe(e => this.model = e);
  }


  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid


    this.loading = true;
    if (this.isAddMode) {
      this.createTraining();
    } else {
      this.updateTraining();
    }
  }

  private createTraining() {
    this.model.tasks=this.tasks;
    this.trainingService.create(this.model)
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

  //get selected(){
    //return this.tasks.filter(this.model=>this.model.selected=true)
  //}
  private updateTraining() {
    this.trainingService.update(this.id, this.model)
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
