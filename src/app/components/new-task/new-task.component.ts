import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    MatButton,
    MatIcon,
    ReactiveFormsModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private data: DataService) {
    this.form = this.fb.group({
      taskTitle: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    })
  }

  add() {
    const title = this.form.controls['taskTitle'].value;
    this.data.addTask(title)
    this.form.reset()
  }
}
