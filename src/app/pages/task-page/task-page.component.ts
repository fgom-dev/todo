import { Component } from '@angular/core';
import {NewTaskComponent} from "../../components/new-task/new-task.component";
import {TaskListComponent} from "../../components/task-list/task-list.component";

@Component({
  selector: 'app-task-page',
  standalone: true,
  imports: [
    NewTaskComponent,
    TaskListComponent
  ],
  templateUrl: './task-page.component.html',
  styleUrl: './task-page.component.css'
})
export class TaskPageComponent {

}
