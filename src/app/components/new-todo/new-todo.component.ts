import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-new-todo',
  standalone: true,
  imports: [MatButtonModule, MatIcon, ReactiveFormsModule, NgIf],
  templateUrl: './new-todo.component.html',
  styleUrl: './new-todo.component.css'
})
export class NewTodoComponent {
  public form: FormGroup;
  constructor(private fb: FormBuilder, private data: DataService) {
    this.form = this.fb.group({
      todoTitle: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
        ])]
    })
  }

  add() {
    const title = this.form.controls['todoTitle'].value;
    this.data.addTodo(title)
    this.form.reset()
  }
}
