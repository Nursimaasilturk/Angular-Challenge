import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/TaskModel';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.scss']
})
export class CreatorComponent implements OnInit {
  text:string="";
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  onUpdateText(e:any){
    this.text=e.target.value;
  }
  onCreate(){
    const newTask={
      id:this.todoService.getTodoData().length+1,
      task:this.text,
      status:"active",
    } as TaskModel;
    this.todoService.addTodo(newTask);
  }
}
