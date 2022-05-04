import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);
const schuelerModule = () => import('./_schuelerHomeScreen/schueler.module').then(x => x.SchuelerModule);
const dozentModule = () => import('./_dozentHomeScreen/dozent.module').then(x => x.DozentModule);
const createTaskModule = () => import('./_createTask/createTask.module').then(x => x.CreateTaskModule);
const tasktableModule = () => import('./_task-table/taskTable.module').then(x => x.TaskTableModule);

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'schueler', loadChildren: schuelerModule, canActivate: [AuthGuard] },
  { path: 'dozent', loadChildren: dozentModule, canActivate: [AuthGuard] },
  { path: 'task', loadChildren: createTaskModule, canActivate: [AuthGuard] },
  { path: 'tasktable', loadChildren: tasktableModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
