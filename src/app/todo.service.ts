import { Injectable } from '@angular/core';

export interface Todo {
  title: string;
  completed: boolean;
}

@Injectable({ providedIn: 'root' })
export class TodoService {
    todo: Todo[] = [];

    addItem(title: string): void {
      const todo: Todo = {
        title,
        completed: false,
      };
      this.todo.push(todo);
    }

    removeItem(todo: Todo): void {
      const index = this.todo.indexOf(todo);
      this.todo.splice(index, 1);
    }

    clearCompleted(): void {
      this.todo = this.todo.filter((todo) => !todo.completed);
    }

    toggleAll(completed: boolean): void {
      this.todo = this.todo.map((todo) => ({ ...todo, completed }));
    }

    getItems(type = 'all'): Todo[] {
      switch (type) {
        case 'active':
          return this.todo.filter((todo) => !todo.completed);
        case 'completed':
          return this.todo.filter((todo) => todo.completed);
      }

      return this.todo;
    }
}