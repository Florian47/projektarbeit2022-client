import { Component } from '@angular/core';

import { AccountService } from './_services';
import {User} from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html', styleUrls: ['app.component.css'] })
export class AppComponent {
  user: User | undefined;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }


  isNotStudent(){
    const expectedRole = ["ROLE_TEACHER"];
    const user = this.accountService.userValue;
    return expectedRole.some(expRole => user.roles.map(role => role.name.toString()).includes(expRole));
  }
  isStudent(){
    const expectedRole = ["ROLE_STUDENT"];
    const user = this.accountService.userValue;
    return expectedRole.some(expRole => user.roles.map(role => role.name.toString()).includes(expRole));
  }
  logout() {
    this.accountService.logout();
  }
}
