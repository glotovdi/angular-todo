import { Component, OnInit } from '@angular/core';
import { TodosModel } from '../../models/todos.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todos: TodosModel[];
  test = new FormControl('testInput');
  newTodo: string;
  ngOnInit() {
    this.todos = [
      {
        title: 'Изучить верстку',
        completed: false
      },
      {
        title: 'Изучить JS',
        completed: false
      },
      {
        title: 'Изучить Angular',
        completed: true
      }
    ];
  }

  public toogleStatus(todo: TodosModel): boolean {
    return (todo.completed = !todo.completed);
  }

  public deletedTodo(todo: TodosModel): void {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  public addTodo(): void {
    this.todos.push({ title: this.test.value, completed: false });
    this.test.value.reset();
  }
}
