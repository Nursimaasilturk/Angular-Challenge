import { Component, ElementRef, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { TodoService } from 'src/app/services/todo.service';
import { Task } from 'src/app/Models/task';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  title: string = 'Categories';
  category: Category[] = [];
  completedTask: number | undefined;
  totalTask: Task[] = [];

  constructor(private service: TodoService, private el: ElementRef) {}

  ngOnInit(): void {
    this.category = this.service.categoryList;
    this.totalTask = this.service.taskList;
  }

  getCountOfTasks(item: any): number {
    return this.service.getCountOfTotalTasks(item);
  }

  getCountOfCompletedTasks(item: any): number {
    return this.service.getCountOfCompletedTasks(item);
  }
  getTotal(item: any): number {
    return this.service.getTotal(item);
  }
  getPercent(item: any): string {
    return `${this.service.getTotal(item) * 100}%`;
  }
}
