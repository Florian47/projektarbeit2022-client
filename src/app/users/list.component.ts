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
  isAdmin(){
    const expectedRole = ["ROLE_STUDENT"];
    const expectedRole2=["ROLE_TEACHER"];
    const user1 = this.accountService.userValue;
    const realRole = [];
    for(var i = 0; i < user1.roles.length; i++){

      realRole.push(user1.roles[i].name);
    }
    if(expectedRole.toString() != realRole.toString() && expectedRole2.toString() != realRole.toString()){

      return true
    }
    return false;
  }
}
