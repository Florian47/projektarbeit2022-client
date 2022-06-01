
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
  constructor(public id: number = 0, public name: RoleType = RoleType.ROLE_STUDENT) {
  }

  public get Name(){
    return this.name;
  }
  public get Id(){
    return this.id;
  }
}
export enum RoleType {
  ROLE_STUDENT = "ROLE_STUDENT",
  ROLE_TEACHER = "ROLE_TEACHER",
  ROLE_ADMINISTRATOR= "ROLE_ADMINISTRATOR"
}



