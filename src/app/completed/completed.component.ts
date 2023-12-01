import { Component, OnInit } from '@angular/core';
import { TodosService } from '../service/todos.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss'],
})
export class CompletedComponent implements OnInit {
  completedList!: Todo[];
  loading = true;

  constructor(private todoService: TodosService) {}

  ngOnInit(): void {
    this.loadCompletedTodos();
  }

  private loadCompletedTodos() {
    this.todoService.getCompletedTodos().subscribe((completedTodos) => {
      this.completedList = completedTodos;
      this.loading = false;
    });
  }
}