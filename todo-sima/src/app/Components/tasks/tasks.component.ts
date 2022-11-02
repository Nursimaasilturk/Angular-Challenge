import { Component, ElementRef, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { Task } from 'src/app/Models/task';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  title = "Today's Task";

  constructor(private todoService: TodoService, private el: ElementRef) {}
  task: Task[] = [];
  cList: Category[] = [];
  clickedOn(event: any, item: Task) {
    event.target.closest('a').classList.add('completed-task');
    item.status = 'done';
    /*
    1- Taskın idsi
    2- ID'den servisteki taskı almalısın
    3- veriyi degistirmelisin.
    */
  }
  ngOnInit(): void {
    this.task = this.todoService.taskList.filter(
      (item) => item.status == 'will'
    );
    this.cList = this.todoService.categoryList;
  }
}
function animateButton(event: any) {
  throw new Error('Function not implemented.');
}
