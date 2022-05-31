import { Component } from '@angular/core';

import { AccountService } from './_services';
import {Role, RoleType, User} from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html', styleUrls: ['app.component.css'] })
export class AppComponent {
  user: User | undefined;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }


  isTeacher(){
    const expectedRole = ["ROLE_ADMINISTRATOR", "ROLE_TEACHER"];
    const user1 = this.accountService.userValue;
    const realRole = [];
    for(var i = 0; i < user1.roles.length; i++){

        realRole.push(user1.roles[i].name);
    }
    if(expectedRole.toString().indexOf(realRole.toString()) !=-1){
      return true
    }
    return false;
  }
  logout() {
    this.accountService.logout();
  }
}
