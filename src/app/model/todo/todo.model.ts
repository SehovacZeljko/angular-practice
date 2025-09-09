export interface Todo {
  id: number;          // unique identifier
  title: string;       // task title
  description?: string; // optional description
  completed: boolean;  // is the task done?
  dueDate?: Date;       // optional due date
  priority?: 'low' | 'medium' | 'high'; // optional priority
}