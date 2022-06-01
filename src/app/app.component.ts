import { Component } from '@angular/core';

import { AccountService } from './_services';
import {Role, RoleType, User} from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html', styleUrls: ['app.component.css'] })
export class AppComponent {
  user: User | undefined;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }


  isNotStudent(){
    const expectedRole = ["ROLE_STUDENT"];
    const user1 = this.accountService.userValue;
    const realRole = [];
    for(var i = 0; i < user1.roles.length; i++){

        realRole.push(user1.roles[i].name);
    }
    if(expectedRole.toString() != realRole.toString()){
      return true
    }
    return false;
  }
  logout() {
    this.accountService.logout();
  }
}
