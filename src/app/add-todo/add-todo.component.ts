import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter(); 
  title!: string;
  desc!: string;
  constructor() { }

  ngOnInit(): void {
  }
  AddTodo(){
    const todo = {
      id: 8,
      title: this.title,
      desc: this.desc ,
      isActive :true
    }

    this.title ="";
    this.desc = "";
  }

}
