import { Injectable } from '@angular/core';
import { TaskListModel } from '../models/TaskListModel';
import { TaskModel } from '../models/TaskModel';
import { TodoData as apiData } from './data';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor() { }
  
  getTodoData():TaskListModel{
    return apiData;
  }

  addTodo(newTodo:TaskModel){
    this.getTodoData().push(newTodo);
  }
}
