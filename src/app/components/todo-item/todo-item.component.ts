import {Component, Input, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {MatTooltip, MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from "@angular/material/button";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatFormField} from "@angular/material/form-field";
import {TaskListComponent} from "../task-list/task-list.component";
import {Todo} from "../../models/todo.model";
import {AsyncPipe, NgIf} from "@angular/common";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [MatButtonModule, MatExpansionModule, MatIconModule, MatTooltip, TaskListComponent, NgIf, AsyncPipe],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss'
})

export class TodoItemComponent {
  @Input() todo!: Todo;
  public editMode$ = this.data.getEditMode()
  constructor(private data: DataService) {
  }

  deleteTodo(idTodo: number) {
    this.data.removeTodo(idTodo)
  }
}
