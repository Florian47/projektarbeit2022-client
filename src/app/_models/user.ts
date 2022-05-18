
export class User {
  constructor(public id: number = 0,
              public username: string ='',
              public firstName: string ='',
              public lastName: string='',
              public password: string='',
              public roles: Role[]=[],
              public token: string='',
              public isDeleting: boolean=false) {
  }
}
export class Role {
  constructor(public id: number, public name: RoleType) {
  }
}
export enum RoleType {
  STUDENT = "STUDENT",
  TEACHER = "TEACHER",
  ADMINISTRATOR= "ADMINISTRATOR"
}



