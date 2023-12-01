import { Injectable } from '@angular/core';
import { of, Observable, timer } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todoList: Todo[] = [];
  private completedList: Todo[] = [];
  private removedTask: Todo[] = [];

  constructor() {}

  addTodo(newTodo: Todo): Observable<void> {
    return of(null).pipe(
      delay(2000),
      map(() => {
        this.todoList.push(newTodo);
      })
    );
  }

  getTodos(): Observable<Todo[]> {
    return timer(1000).pipe(
      map(() => this.todoList),
      delay(1000)
    );
  }

  CompleteTask(todo: Todo): Observable<void> {
    return of(null).pipe(
      map(() => {
        todo.completed = true;
        this.completedList.push(todo);
        this.todoList = this.todoList.filter((item) => item.id !== todo.id);
      })
    );
  }

  getCompletedTodos(): Observable<Todo[]> {
    return timer(1000).pipe(
      map(() => this.completedList),
      delay(1000)
    );
  }

  deleteTask(todo: Todo, index: number): Observable<void> {
    return of(null).pipe(
      delay(2000),
      map(() => {
        todo.completed = false;
        todo.deleted = true;
        this.completedList.splice(index, 1);
        this.removedTask.push(todo);
        this.todoList = this.todoList.filter((item) => item.id !== todo.id);
      })
    );
  }
}
