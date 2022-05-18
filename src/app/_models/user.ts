
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



