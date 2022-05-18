import {Component, OnInit} from '@angular/core';
import {TaskDifficulty} from "../_models/task.difficulty";
import {TaskCategory} from "../_models/task.category";
import {StudentGeneratedTraining} from "../_models/student.generated.training";
import {TrainingService} from "../_services/training.service";
import {Training} from "../_models/training";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";
import {AccountService} from "../_services";


@Component({
  selector: 'app-html',
  templateUrl: './schueler.component.html',
  styleUrls: ['./schueler.component.css']
})
export class SchuelerComponent implements OnInit {
  trainingsliste: Training[] = [];
  difficultyOptions: TaskDifficulty[];
  taskTypeOptions: TaskCategory[];
  model: StudentGeneratedTraining = new StudentGeneratedTraining();


  constructor(private accountService: AccountService, private trainingsService: TrainingService, private router: Router) {
    trainingsService.getAllTrainingsForStudent(accountService.userValue.id).subscribe((training: Training[]) => {
      this.trainingsliste = training
    })
    this.difficultyOptions = [TaskDifficulty.EASY, TaskDifficulty.MEDIUM, TaskDifficulty.HARD];
    this.taskTypeOptions = [TaskCategory.GRAMMATIK, TaskCategory.LUECKENTEXT, TaskCategory.ZEICHENSETZUNG, TaskCategory.GROSS_KLEIN_SCHREIBUNG];

  }

  ngOnInit(): void {
  }

  onSubmit() {

  }


  createTraining() {
    this.trainingsService.createStudentTraining(this.model).pipe(first()).subscribe((training: Training) => {
      this.router.navigate(['/doTraining/' + training.id]);
    });

  }

  startTraining(id: number) {

    this.router.navigate(['/doTraining/' + id]);

  }


}





