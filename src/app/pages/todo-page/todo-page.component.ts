import {Component, Input, OnInit} from '@angular/core';
import {NewTodoComponent} from "../../components/new-todo/new-todo.component";
import {TodoListComponent} from "../../components/todo-list/todo-list.component";
import {Todo} from "../../models/todo.model";
import {Observable} from "rxjs";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [
    NewTodoComponent,
    TodoListComponent
  ],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {

}
