import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo.model';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<Todo> = []
  constructor() { }

  ngOnInit(): void {
  }

  

  addTodo(task:string){ 
    this.todos.push(
      {
      title : task
      }
    );
    console.log(this.todos);
  }


  deleteTodo(id:number){
    this.todos.splice(id, 1);
  }
}
