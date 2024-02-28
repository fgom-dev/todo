import {Todo} from "../models/todo.model";
import {Task} from "../models/task.model";
import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public TODOS : Todo[] = []
  public SELECTED_TODO : Todo = {
    id: 0,
    title: '',
    tasks: []
  }
  public EDIT_MODE = new BehaviorSubject(false)

  getTodoList() : Todo[] {
    return this.TODOS
  }

  getSelectedTodo() : Todo | undefined {
    return this.SELECTED_TODO
  }

  getEditMode() : Observable<boolean> {
    return this.EDIT_MODE.asObservable()
  }

  setEditMode(value: boolean) {
    this.EDIT_MODE.next(value)
  }

  selectTodo(idTodo: number) : Todo | undefined {
    return this.TODOS.find((x) => x.id == idTodo)
  }

  addTodo(title : string) : void {
    const id = this.TODOS.length + 1;
    this.TODOS.push(new Todo(id, title, []))
  }

  removeTodo(idTodo: number) : void {
    const todo = this.TODOS.find((x) => x.id == idTodo)!
    const todoIndex = this.TODOS.indexOf(todo)
    this.TODOS.splice(todoIndex, 1)
  }

  addTask(title : string) : void {
    const idTask = this.SELECTED_TODO.tasks.length + 1;
    this.SELECTED_TODO!.tasks.push(new Task(idTask, title))
  }

  removeTask(idTask: number) : void {
    const task = this.SELECTED_TODO!.tasks.find((x) => x.id == idTask)!
    const taskIndex = this.SELECTED_TODO!.tasks.indexOf(task)
    this.SELECTED_TODO!.tasks.splice(taskIndex, 1)
  }

  completeTask(idTask: number) : void {
    this.SELECTED_TODO.tasks.map((x) => x.id == idTask ? x.completeTask() : x)
  }

  countCompletedTask() : number | undefined {
    return this.SELECTED_TODO.tasks.filter((x) =>  x.isComplete).length
  }

}
