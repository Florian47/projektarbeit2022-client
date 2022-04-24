export class User {
  constructor(public id: string,
              public username: string,
              public firstName: string,
              public lastName: string,
              public role: RoleType,
              public token: string,
              public isDeleting: boolean) {
  }
}

export enum RoleType {
  Student,
  Teacher,
  Administrator
}
