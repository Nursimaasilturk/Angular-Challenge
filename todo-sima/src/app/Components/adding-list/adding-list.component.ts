import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Category } from 'src/app/Models/category';
import { TodoService } from 'src/app/services/todo.service';
import { Task } from 'src/app/Models/task';
@Component({
  selector: 'app-adding-list',
  templateUrl: './adding-list.component.html',
  styleUrls: ['./adding-list.component.scss'],
})
export class AddingListComponent implements OnInit {
  categoryList: Category[] = [];
  taskModal = this.formBuilder.group({
    id: [''],
    task: [''],
  });

  /*   add: Task = {
    content: this.taskModal.value.task,
    category_id: this.taskModal.value.id,
    status: 'will',
  }; */

  constructor(
    private todoService: TodoService,
    private formBuilder: FormBuilder
  ) {}
  onSubmit() {
    let newTask = {
      content: this.taskModal.value.task,
      category_id: Number(this.taskModal.value.id),
      status: 'will',
    } as Task;
    this.todoService.addingTaskFunction(newTask);
    console.log(this.todoService.taskList);
  }
  ngOnInit(): void {
    //  this.todoService.taskList.push(this.add);
    this.categoryList = this.todoService.categoryList;
  }
}
function addingTaskFunc(addingList: any, Task: any) {
  throw new Error('Function not implemented.');
}
