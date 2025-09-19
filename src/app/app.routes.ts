import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', title:'Home' }, // default route
  { path: 'home', component: HomeComponent, title:'Home' },
  { path:'todo', component:TodoComponent, title:'ToDo'},
  { path: '**', redirectTo: 'home', title:'Home' } // wildcard for unknown routes

];
