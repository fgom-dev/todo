import {Component, OnInit} from '@angular/core';
import {TaskItemComponent} from "../task-item/task-item.component";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {RouterLink} from "@angular/router";
import {provideNativeDateAdapter} from "@angular/material/core";
import {NewTaskComponent} from "../new-task/new-task.component";
import {TodoListComponent} from "../todo-list/todo-list.component";
import {DataService} from "../../services/data.service";
import {Todo} from "../../models/todo.model";
import {Task} from "../../models/task.model";

@Component({
  selector: 'app-task-list',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [TaskItemComponent, NgOptimizedImage, TodoItemComponent, RouterLink, NgForOf, NewTaskComponent, TodoListComponent, NgIf],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent implements OnInit {
  public selectedTodo$: Todo | undefined;
  public tasks$: Task[] | undefined
  public completedTasks$: number | undefined = 0
  constructor(private data: DataService) {
  }
  ngOnInit(): void {
    this.selectedTodo$ = this.data.getSelectedTodo()
    this.tasks$ = this.selectedTodo$?.tasks
  }

  addCompletedTasks(){
    this.completedTasks$ = this.data.countCompletedTask()
  }

}
