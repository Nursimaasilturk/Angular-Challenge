import { Component, OnInit } from '@angular/core';
import { TaskListModel } from 'src/app/models/TaskListModel';
import { TaskModel } from 'src/app/models/TaskModel';
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
    this.todoList=this.todoService.getTodoData();
    this.cTodoList=this.todoService.getTodoData();
  }

  onClick(id:any){
    const task:TaskModel|undefined=this.todoList.find(item=>item.id==id);
    if(task)
      task.status='completed';
  }
  onDelete(id:any){
    const task:TaskModel|undefined=this.todoList.find(item=>item.id==id);
    if(task)
      task.status='deleted';
  }
}
