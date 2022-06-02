import { Component } from '@angular/core';

import { User } from 'src/app/_models';
import { AccountService } from 'src/app/_services';
/**
 * Stellt die Homeansicht bereit  die allerdings keine funktion beinhaltet nur der startbildschirm
 * @author Chris Leon Brinkhoff
 */
@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
  user: User;
  /**
   * Wird beim Erzeugen der Komponente aufgerufen.
   * @param accountService wird verwendet um infos des Users zu bekommen

   */
  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }
}
