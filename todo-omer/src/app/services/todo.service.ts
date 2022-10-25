import { Injectable } from '@angular/core';
import { TaskListModel } from '../models/TaskListModel';
import { TodoData as apiData } from './data';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  constructor() { }
  
  getTodoData():TaskListModel{
    return apiData;
  }
}
