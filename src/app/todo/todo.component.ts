import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // <-- add this
import { Todo } from '../model/todo/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  standalone: true, 
  imports: [CommonModule],  
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent  implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}

  // ngOnInit(): void {
  //     // Subscribe to reactive updates
  //     this.todoService.todos$.subscribe(todos => this.todos = todos);
      
  //   }
  ngOnInit(): void {
  // Subscribe to reactive updates
  this.todoService.todos$.subscribe(todos => {
    this.todos = todos;
    console.log('All todos:', this.todos); // <-- log here
  });
}



  addTodo(title: string) {
    const newTodo: Todo = {
      id: Date.now(), // simple unique id
      title,
      completed: false
    };
    this.todoService.addTodo(newTodo);
  }

  toggleCompletion(id: number) {
    this.todoService.toggleTodoCompletion(id);
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

}
