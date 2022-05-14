import {User} from "./user";

export class Training {
  constructor(public id: number=0,
              public name:String='',
              public students: User = new User(),
              public individual: boolean= false,
              public task: Task[]=[]) {
  }
}
