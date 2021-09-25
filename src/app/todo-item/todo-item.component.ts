import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
 @Input() todo!: Todo;
 @Input() i !: number
 @Output() todoDel: EventEmitter<Todo> = new EventEmitter(); 
 @Output() todoAChange: EventEmitter<Todo> = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }
  onDel(todo : Todo) {
    this.todoDel.emit(todo);
    console.log(todo)
    console.log("this is it");
  }
  onCheckCB(todo:Todo){
    console.log(todo.isActive);
    this.todoAChange.emit(todo);
  }
}
