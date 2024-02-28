import { Routes } from '@angular/router';
import {BaseComponent} from "./pages/base/base.component";
import {HomeComponent} from "./pages/home/home.component";
import {TodoPageComponent} from "./pages/todo-page/todo-page.component";

export const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        children: [
          { path: '', component: TodoPageComponent},
        ]
      }
    ]
  }
];
