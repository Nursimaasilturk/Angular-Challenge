import { Component, ElementRef, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { Task } from 'src/app/Models/task';
import { TodoService } from 'src/app/services/todo.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'will',
        style({
          right: '20px',
        })
      ),
      state(
        'done',
        style({
          left: '20px',
        })
      ),
      transition('will => done', [animate('0.5s')]),
      transition('done => will', [animate('0.5s')]),
    ]),
  ],
})
export class TasksComponent implements OnInit {
  title = "Today's Task";
  secondTitle = 'Completed Task';
  value: boolean = false;
  constructor(private todoService: TodoService, private el: ElementRef) {}
  task: Task[] = [];
  cList: Category[] = [];
  isOpen = 'will';
  isTrue: boolean = true;
  clickedOn(event: any, item: Task) {
    event.target.closest('a').classList.add('completed-task');
    item.status = 'done';
  }
  ngOnInit(): void {
    this.task = this.todoService.taskList.filter(
      (item) => item.status == 'will'
    );
    this.cList = this.todoService.categoryList;
  }
  toggle() {
    this.isOpen = this.isOpen === 'will' ? 'done' : 'will';
    this.isTrue = !this.isTrue;
  }
}
function animateButton(event: any) {
  throw new Error('Function not implemented.');
}
