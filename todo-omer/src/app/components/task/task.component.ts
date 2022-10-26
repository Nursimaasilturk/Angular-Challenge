import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/TaskModel';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task:TaskModel={id:-1,task:"UNDEFINED TASK EXECUTED",status:"active"};
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log(this.task);
  }
}
