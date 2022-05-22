import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import {LayoutModule} from "./_components/layout.module";

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const schuelerModule = () => import('./schuelerHome/schueler.module').then(x => x.SchuelerModule);
const taskModule = () => import('./task/task.module').then(x => x.TaskModule);
const trainingModule = () => import('./training/training.module').then(x => x.TrainingModule);
const evaluationModule = () => import('./evaluation/evaluation.module').then(x => x.EvaluationModule);
const doTrainingModule = () => import('./processTraining/doTraining.module').then(x => x.DoTrainingModule);

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'schueler', loadChildren: schuelerModule, canActivate: [AuthGuard] },

  { path: 'task', loadChildren: taskModule, canActivate: [AuthGuard] },

  { path: 'training', loadChildren: trainingModule, canActivate: [AuthGuard] },
  { path: 'evaluation', loadChildren: evaluationModule, canActivate: [AuthGuard] },
  { path: 'doTraining', loadChildren: doTrainingModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, LayoutModule],
})
export class AppRoutingModule { }
