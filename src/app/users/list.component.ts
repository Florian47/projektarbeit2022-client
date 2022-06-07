import {Component, Input, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {AccountService} from 'src/app/_services';
import {User} from "../_models";

@Component({templateUrl: 'list.component.html'})

/**
 * Stellt die Listen-Ansicht aller Nutzer bereit. Sowohl die Oberfläche als auch die Logik ist in dieser Komponente
 * verankert. Über diese Komponente können Nutzer entfernt werden. Wenn man die Rollen Student
 * @author Florian Weinert
 */
export class ListComponent implements OnInit {
  users: User[] = [];
  loading = false;
  /**
   * Wird beim Erzeugen der Komponente aufgerufen.
   * @param accountService wird verwendet um alle Nutzer zu erhalten und spezielle Nutzer zu löschen.
   */
  constructor(private accountService: AccountService) {
  }

  /**
   * Wird beim Erzeugen der Komponente aufgerufen. Holt alle Nutzer welche auf dem System registriert sind.
   */
  ngOnInit() {
    this.loading = true;
    this.accountService.getAll()
      .pipe(first())
      .subscribe((users) => {
        this.users = users;
        this.loading = false;
      });
  }

  /**
   * Löscht einen Nutzer über seine Id. Wird im Html verwendet.
   * @param id des Nutzers welcher gelöscht werden soll.
   */
  deleteUser(id: number) {
    const user = this.users.find((x: User) => x.id === +id);
    user!.isDeleting = true;
    this.accountService.delete(id)
      .pipe(first())
      .subscribe(() => this.users = this.users.filter((x: User) => x.id !== id));
  }

  /**
   * Wird im Html verwendet um zu evaluieren ob der Nutzer-Hinzufügen-Button eingeblendet werden soll. Wenn der
   * angemeldete Nutzer die Rolle 'ROLE_TEACHER' oder 'ROLE_ADMINISTRATOR' hat, wird der Button angezeigt.
   */
  isTeacherOrAdmin() {
    const user = this.accountService.userValue;
    const expectedRole = ["ROLE_TEACHER", "ROLE_ADMINISTRATOR"];
    return expectedRole.some(expRole => user.roles.map(role => role.name.toString()).includes(expRole));
  }

  /**
   * Wird im Html verwendet um zu evaluieren ob der Nutzer-Löschen/Bearbeiten-Button eingeblendet werden soll. Wenn der
   * angemeldete Nutzer die Rolle 'ROLE_ADMINISTRATOR' hat, wird der Button angezeigt.
   */
  isAdmin() {
    const expectedRole = ["ROLE_ADMINISTRATOR"];
    const user = this.accountService.userValue;
    return expectedRole.some(expRole => user.roles.map(role => role.name.toString()).includes(expRole));
  }
}
