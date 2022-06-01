import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from 'src/app/_services';
import {User} from "../_models";

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
  users : User[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accountService.getAll()
      .pipe(first())
      .subscribe((users) => this.users = users);
  }

  deleteUser(id: number) {
    const user = this.users.find((x: User) => x.id === +id);
    user!.isDeleting = true;
    this.accountService.delete(id)
      .pipe(first())
      .subscribe(() => this.users = this.users.filter((x: User) => x.id !== id));
  }

  isNotStudent(){
    const user = this.accountService.userValue;
    const expectedRole = ["ROLE_TEACHER", "ROLE_ADMINISTRATOR"];
    return expectedRole.some(expRole => user.roles.map(role => role.name.toString()).includes(expRole));
  }
  isAdmin(){
    const expectedRole = ["ROLE_ADMINISTRATOR"];
    const user = this.accountService.userValue;
    return expectedRole.some(expRole => user.roles.map(role => role.name.toString()).includes(expRole));
  }
}
