export class Task {
  constructor(
    public id: number,
    public title: string,
    public isComplete: boolean = false,
  ) { }

  completeTask(){
    this.isComplete = !this.isComplete
  }
}
