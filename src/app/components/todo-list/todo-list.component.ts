import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {TodoItemComponent} from "../todo-item/todo-item.component";
import {RouterLink} from "@angular/router";
import {TaskItemComponent} from "../task-item/task-item.component";
import {Todo} from "../../models/todo.model";
import {DataService} from "../../services/data.service";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {MatAccordion} from "@angular/material/expansion";

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgOptimizedImage,
    TodoItemComponent,
    RouterLink,
    NgForOf,
    TaskItemComponent,
    NgIf,
    MatIcon,
    MatIconButton,
    MatTooltip,
    CommonModule,
    MatButton,
    MatAccordion
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  public todos$: Todo[] | undefined;
  public editMode$ = this.data.getEditMode()
  constructor(private data: DataService) {
  }
  ngOnInit() {
    this.todos$ = this.data.getTodoList()
  }
  selectTodo(idTodo: number){
    this.data.selectTodo(idTodo)
  }
  cancelEditMode() {
    this.data.setEditMode(false)
  }
  save() {
    this.data.setEditMode(false)
  }
}
