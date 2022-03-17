import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/todo';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todo> =new EventEmitter();
  title:string;
  desc:string;
  count:0;
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    const todo ={
      sno:this.count++,
      title:this.title,
      desc:this.desc,
      active:true
    }
    this.todoAdd.emit(todo);
  }

}
