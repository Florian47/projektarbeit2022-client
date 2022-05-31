import { Component } from '@angular/core';

import { AccountService } from './_services';
import {Role, RoleType, User} from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html', styleUrls: ['app.component.css'] })
export class AppComponent {
  user: User | undefined;
  roles:RoleType[];

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
    this.roles = [RoleType.ROLE_STUDENT,RoleType.ROLE_TEACHER,RoleType.ROLE_ADMINISTRATOR];
  }

  isTeacher(){

  }

  isStudent(){
    var role : RoleType[];
    if(role === this.accountService.userValue.roles) {

      return true;
    }
    return false;
  }
  logout() {
    this.accountService.logout();
  }
}
