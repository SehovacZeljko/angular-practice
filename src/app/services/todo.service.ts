import { Injectable } from '@angular/core';
import { Todo } from '../model/todo/todo.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

 // Initial todos
  private todos: Todo[] = [
    { id: 1, title: 'Learn Angular', completed: false, priority: 'high' },
    { id: 2, title: 'Buy groceries', completed: true },
    { id: 3, title: 'Go for a run', completed: false, dueDate: new Date() },
  ];

    // BehaviorSubject to allow reactive updates
  private todosSubject: BehaviorSubject<Todo[]> = new BehaviorSubject(this.todos);

    // Observable for components to subscribe
  todos$: Observable<Todo[]> = this.todosSubject.asObservable();


  
  constructor() { }


  // Get all todos
  getTodos(): Todo[] {
    return [...this.todos]; // return a copy
  }

  // Add a new todo
  addTodo(todo: Todo): void {
    this.todos.push(todo);
    this.todosSubject.next(this.todos);
  }

  // Toggle completion status
  toggleTodoCompletion(id: number): void {
    const todo = this.todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      this.todosSubject.next(this.todos);
    }
  }

  // Delete a todo
  deleteTodo(id: number): void {
    this.todos = this.todos.filter(t => t.id !== id);
    this.todosSubject.next(this.todos);
  }
}
