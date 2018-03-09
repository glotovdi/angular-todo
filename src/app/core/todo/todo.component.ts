import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { TodosModel } from '../../models/todos.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: TodosModel[] = [];
  inputTodo = new FormControl('');
  isEmptyInput: boolean = true;

  ngOnInit() {
    this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    this.inputTodo.valueChanges.subscribe(res => {
      this.isEmptyInput = res === '' ? true : false;
    });
  }
  /**Выполненный таск */
  public toogleStatus(todo: TodosModel): boolean {
    debugger;
    this.updateLocalStorage();
    return (todo.completed = !todo.completed);
  }

  /** Удалить тудуху */
  public deletedTodo(todo: TodosModel): void {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
    this.updateLocalStorage();
  }

  /**Добавить тудуха */
  public addTodo(): void {
    this.todos.push({ title: this.inputTodo.value, completed: false });
    this.inputTodo.reset();
    this.isEmptyInput = true;
    this.updateLocalStorage();
  }

  /** Перечеркнуть итем */
  public toggleItem(todo: TodosModel, e: any): void {
    todo.completed = e.checked;
    this.updateLocalStorage();
  }

  /** обновить локал стор */
  private updateLocalStorage(): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
