import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // data type string is not saved in null 
  localitem : string |null ;
  todos: Todo[] = [];
  constructor() { 
    this.todos = [];
    this.localitem = localStorage.getItem("todos");
    // this.localitem = (JSON.parse(this.localitem)||{})
    if(this.localitem == null){
      this.todos = [];
    }
    else{
      this.todos =(JSON.parse(this.localitem)||{});
    }

  }

  ngOnInit(): void {
  }
  delTodo(todo : Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    console.log(index)
    this.todos.splice(index,1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo : Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  tooglekkh(todo: Todo){
    console.log(todo);
    var index1 = this.todos.indexOf(todo);
    this.todos[index1].isActive = !(this.todos[index1].isActive);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  

}
