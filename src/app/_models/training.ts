import {User} from "./user";
import {Task} from "./task";

export class Training {
  constructor(public id: number=0,
              public name:String='',
              public students: User[] = [],
              public individual: boolean= false,
              public tasks: Task[]=[]) {
  }
}
