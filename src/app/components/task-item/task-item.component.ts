import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {Todo} from "../../models/todo.model";
import {Task} from "../../models/task.model";
import {NgClass} from "@angular/common";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [
    MatIcon,
    MatIconButton,
    MatTooltip,
    MatCheckboxModule,
    FormsModule,
    NgClass
  ],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() completedTasksEvent = new EventEmitter();

  constructor(private data: DataService) {
  }

  completeTask(idTask: number) {
    this.data.completeTask(idTask)
    this.completedTasksEvent.emit()
  }

  delete(idTask: number) : void {
    this.data.removeTask(idTask)
  }
}


