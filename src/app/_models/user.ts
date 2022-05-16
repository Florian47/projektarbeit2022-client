import {
  RouterLinkEmptyExprVisitor
} from "@angular/core/schematics/migrations/router-link-empty-expression/angular/html_routerlink_empty_expr_visitor";

export class User {
  constructor(public id: number = 0,
              public username: string ='',
              public firstName: string ='',
              public lastName: string='',
              public role: RoleType[] =[],
              public token: string='',
              public isDeleting: boolean= false) {
  }
}

export enum RoleType {
  Student,
  Teacher,
  Administrator
}

let roleList = RoleType[RoleType.Student, RoleType.Teacher, RoleType.Administrator];
