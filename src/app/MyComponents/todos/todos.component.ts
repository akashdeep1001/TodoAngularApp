import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem : string | null;
  todos: Todo[];

  constructor() {
    this.localItem = localStorage.getItem("todos");
    if(this.localItem==null){
      this.todos = [ ]
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }

  }

  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    console.log("Deleting a todo");
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    this.todos.push(todo);
    console.log("add a todo")
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  markCheckbox(todo:Todo){
    console.log("Checkbox click")
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
