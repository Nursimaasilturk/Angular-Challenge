import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/Models/category';
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-adding-list',
  templateUrl: './adding-list.component.html',
  styleUrls: ['./adding-list.component.scss'],
})
export class AddingListComponent implements OnInit {
  categoryList: Category[] = [];
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.categoryList = this.todoService.categoryList;
  }
  onClickForm(data: { category: string; task: string }) {
    console.log('category:' + data.category + 'task' + data.task);
  }
}
