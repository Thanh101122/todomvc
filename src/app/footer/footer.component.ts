import { Component,inject } from '@angular/core';
import { Location } from '@angular/common';
import { Todo, TodoService } from '../todo.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  private location = inject(Location);
  private todoService = inject(TodoService);

  get todo(): Todo[] {
    return this.todoService.getItems();
  }

  get activeTodo(): Todo[] {
    return this.todoService.getItems('active');
  }

  get completedTodo(): Todo[] {
    return this.todoService.getItems('completed');
  }

  get filter(): string {
    return this.location.path().split('/')[1] || 'all';
  }

  clearCompleted() {
    this.todoService.clearCompleted();
  }
}
