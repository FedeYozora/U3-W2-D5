import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodosComponent implements OnInit {
  todoList!: Todo[];
  newTodoTitle: string = '';
  loading = true;

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.loadTodos();
  }
  addTodo() {
    const newTodo: Todo = {
      id: this.todoList.length + 1,
      title: this.newTodoTitle,
      completed: false,
    };

    this.todoService.addTodo(newTodo).subscribe(() => {
      this.loadTodos();
      this.newTodoTitle = '';
    });
  }
  CompleteTaskClick(todo: Todo) {
    this.todoService.CompleteTask(todo).subscribe(() => {
      this.loadTodos();
    });
  }

  private loadTodos() {
    this.todoService.getTodos().subscribe((todos) => {
      this.todoList = todos;
      this.loading = false;
    });
  }
}