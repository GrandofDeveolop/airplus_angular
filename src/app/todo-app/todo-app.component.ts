import { Component, OnInit } from '@angular/core';
import {Todo} from '../todo';
import {TodoService} from '../todo.service';



@Component({
  moduleId: module.id,
  selector: 'app-todo-app',
  templateUrl: './todo-app.component.html',
  styleUrls: ['./todo-app.component.css'],
  providers: [TodoService]
})
export class TodoAppComponent implements OnInit {

  newTodo: Todo = new Todo();
  constructor(private todoService: TodoService) {
  }
  ngOnInit() {
  }




  addTodo() {
    const date = new Date();
    console.log(date);
    this.newTodo.startdate = date.getHours().toString() + ':' + date.getMinutes() + ':' + date.getSeconds();
    this.newTodo.enddate = date.getHours().toString() + ':' + date.getMinutes() + ':' + date.getSeconds();

    // this.newTodo.startdate = str.toString();
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    const date = new Date();
    todo.startdate = date.getHours().toString() + ':' + date.getMinutes() + ':' + date.getSeconds();
    this.todoService.toggleTodoComplete(todo);
  }

  removeTodo(todo) {
    this.todoService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoService.getAllTodos();
  }
}



