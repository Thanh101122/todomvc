import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private todoService = inject(TodoService);

  title = '';

  addTodo() {
    if (this.title) {
      this.todoService.addItem(this.title);

      // Reset title to clear input field.
      this.title = '';
    }
  }
}
