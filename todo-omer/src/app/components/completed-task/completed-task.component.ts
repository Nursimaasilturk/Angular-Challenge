import { Component, Input, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/TaskModel';

@Component({
  selector: 'app-completed-task',
  templateUrl: './completed-task.component.html',
  styleUrls: ['./completed-task.component.scss']
})
export class CompletedTaskComponent implements OnInit {
  @Input() task:TaskModel={status:"completed",id:-1,task:"undefined"};
  
  constructor() { }

  ngOnInit(): void {
  }

}
