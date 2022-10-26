import { Component, OnInit } from '@angular/core';
import { TaskListModel } from 'src/app/models/TaskListModel';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  todoList:TaskListModel=[];
  cTodoList:TaskListModel=[];
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    //this.todoService.addTodo({id:4,task:"New Task"});
    this.todoList=this.todoService.getTodoData().slice();
    this.cTodoList=[...this.todoService.getTodoData().filter(item=>item.status=='completed')];
  }
}
