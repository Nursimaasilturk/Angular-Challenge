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
    if(task != null && task != ""){
      this.todos.push(
        {
        title : task
        }
      );
    }
    console.log(this.todos);
  }


  deleteTodo(id:number){
    let isConfirm = confirm("Are you that you want to delete your task ?");
    if(isConfirm) this.todos.splice(id, 1);
  }

  completedTodo(id:number){
    this.todos[id].is_completed = true;
  }

  unCompletedTodo(id:number){
    this.todos[id].is_completed = false;
  }

  clearTodos():void {
    let isConfirm = confirm("Are you that you want to clear your todo list ?");
    if(isConfirm){
      this.todos.splice(0);
    }
    
  }

  editTodo(id:number){
    let currentTitle = this.todos[id].title;
    let newTitle = prompt("Edit todo title", currentTitle);

    if(newTitle != null && newTitle != ""){
      this.todos[id].title = newTitle;
    }
  }

}
