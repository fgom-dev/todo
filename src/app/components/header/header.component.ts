import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule, MatMenuTrigger} from "@angular/material/menu";
import {DataService} from "../../services/data.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private data: DataService) {
  }

  editTodos() {
    if (this.data.getTodoList().length > 0) {
      this.data.setEditMode(true)
    }
  }
}
