import { Component, inject } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Location } from '@angular/common';

@Component({
    selector: 'app-todo-list',
    standalone: true,
    templateUrl: './todo-list.component.html',
    styleUrl: './todo-list.component.css',
    imports: [TodoItemComponent]
})
export class TodoListComponent {
  private location = inject(Location);
  private todoService = inject(TodoService);

  get todo(): Todo[] {
    const filter = this.location.path().split('/')[1] || 'all';
    return this.todoService.getItems(filter);
  }

  get activeTodo(): Todo[] {
    return this.todoService.getItems('active');
  }

  removeTodo(todo: Todo): void {
    this.todoService.removeItem(todo);
  }

  toggleAll(e: Event) {
    const input = e.target as HTMLInputElement;
    this.todoService.toggleAll(input.checked);
  }
}
