import { Component, OnInit } from "@angular/core";
import { TodosModel } from "../../models/todos.model";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  todos: TodosModel[];
  ctrl = new FormControl("some value");
  newTodo: string;
  ngOnInit() {
    this.todos = [
      {
        title: "Купить хлеб",
        completed: false
      },
      {
        title: "Купить майонез",
        completed: false
      },
      {
        title: "Выкинуть мусор",
        completed: true
      }
    ];
  }

  public toogleStatus(todo): boolean {
    console.log(this.todos);
    return (todo.completed = !todo.completed);
  }

  public deletedTodo(todo): void {
    debugger;
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  public addTodo(): void {
    this.todos.push({ title: this.newTodo, completed: false });
    this.newTodo = "";
  }
}
