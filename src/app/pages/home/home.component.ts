import { Component } from '@angular/core';
import {NewTodoComponent} from "../../components/new-todo/new-todo.component";
import {TodoListComponent} from "../../components/todo-list/todo-list.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NewTodoComponent, TodoListComponent, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
