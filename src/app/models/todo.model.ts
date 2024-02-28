import {Task} from "./task.model";

export class Todo {
  constructor(
    public id: number,
    public title: string,
    public tasks: Task[]
  ) { }
}
