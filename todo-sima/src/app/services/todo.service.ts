import { Injectable } from '@angular/core';
import { toArray } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Category } from '../Models/category';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  taskList: Task[] = [
    { content: 'Hard Work.', category_id: 2, status: 'will' },
    { content: 'Go to GYM', category_id: 3, status: 'done' },
    { content: 'Clean Home.', category_id: 1, status: 'done' },
    {
      content: 'Complete the obligations',
      category_id: 2,
      status: 'will',
    },
    {
      content: 'Complete the obligations',
      category_id: 2,
      status: 'done',
    },
    {
      content: 'Complete the obligations',
      category_id: 1,
      status: 'will',
    },
    {
      content: 'Complete the obligations',
      category_id: 3,
      status: 'will',
    },
  ];
  categoryList: Category[] = [
    {
      id: 1,
      name: 'Home',
      color: '#DFFF00',
    },
    {
      id: 2,
      name: 'Bussines',
      color: '#de3163',
    },
    {
      id: 3,
      name: 'Sport',
      color: '#4adede',
    },
  ];
  taskNumber = new EventEmitter<number>();
  constructor() {}
  addingTaskFunction(newTask: Task) {
    this.taskList.push(newTask);
    this.taskNumber.emit(this.taskList.length);
  }
  getCountOfCompletedTasks(item: any): number {
    return this.taskList.filter(
      (i) => i.category_id == item && i.status == 'done'
    ).length;
  }
  getCountOfTotalTasks(item: any): number {
    return this.taskList.filter((i) => i.category_id == item).length;
  }
  getTotal(item: any): number {
    const completed = this.getCountOfCompletedTasks(item);
    const total = this.getCountOfTotalTasks(item);
    return completed / total;
  }
}
