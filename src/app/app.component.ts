import { Component } from '@angular/core';

import { AccountService } from './_services';
import {User} from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html', styleUrls: ['app.component.css'] })
/**
 * Beinhaltet die Navigations-Bar und einen Bereich um andere Module anzeigen zu können (router-outlet).
 * @author Florian Weinert
 */
export class AppComponent {
  user: User | undefined;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  /**
   * Wird im Html verwendet um zu evaluieren ob der angemeldete Nutzer die Rolle 'ROLE_ADMINISTRATOR' hat.
   */
  isTeacher(){
    const expectedRole = ["ROLE_TEACHER"];
    const user = this.accountService.userValue;
    return expectedRole.some(expRole => user.roles.map(role => role.name.toString()).includes(expRole));
  }
  /**
   * Wird im Html verwendet um zu evaluieren ob der angemeldete Nutzer die Rolle 'ROLE_STUDENT' hat.
   */
  isStudent(){
    const expectedRole = ["ROLE_STUDENT"];
    const user = this.accountService.userValue;
    return expectedRole.some(expRole => user.roles.map(role => role.name.toString()).includes(expRole));
  }
  /**
   * Wird im Html verwendet um den angemeldete Nutzer auszuloggen.
   */
  logout() {
    this.accountService.logout();
  }
}
