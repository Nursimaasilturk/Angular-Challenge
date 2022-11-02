import { Injectable } from '@angular/core';
import { toArray } from 'rxjs';
import { Category } from '../Models/category';
import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  taskList: Task[] = [
    { type: 'Bussines', content: 'Hard Work.', category_id: 2, status: 'will' },
    { type: 'Sport', content: 'Go to GYM', category_id: 3, status: 'done' },
    { type: 'Home', content: 'Clean Home.', category_id: 1, status: 'done' },
    {
      type: 'Bussines',
      content: 'Complete the obligations',
      category_id: 2,
      status: 'will',
    },
    {
      type: 'Bussines',
      content: 'Complete the obligations',
      category_id: 2,
      status: 'done',
    },
    {
      type: 'Home',
      content: 'Complete the obligations',
      category_id: 1,
      status: 'will',
    },
    {
      type: 'Sport',
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
  constructor() {}
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
