import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const schuelerModule = () => import('./_schuelerHomeScreen/schueler.module').then(x => x.SchuelerModule);
const dozentModule = () => import('./_dozentHomeScreen/dozent.module').then(x => x.DozentModule);
const createTaskModule = () => import('./_createTask/createTask.module').then(x => x.CreateTaskModule);
const taskModule = () => import('./_task/task.module').then(x => x.TaskModule);
const trainingModule = () => import('./_training/training.module').then(x => x.TrainingModule);
const createTrainingModule = () => import('./_createTraining/createTraining.module').then(x => x.CreateTrainingModule);

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'schueler', loadChildren: schuelerModule, canActivate: [AuthGuard] },
  { path: 'dozent', loadChildren: dozentModule, canActivate: [AuthGuard] },
  { path: 'task', loadChildren: createTaskModule, canActivate: [AuthGuard] },
  { path: 'taskView', loadChildren: taskModule, canActivate: [AuthGuard] },
  { path: 'training', loadChildren: createTrainingModule, canActivate: [AuthGuard] },
  { path: 'trainingView', loadChildren: trainingModule, canActivate: [AuthGuard] },

  { path: 'account', loadChildren: accountModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
