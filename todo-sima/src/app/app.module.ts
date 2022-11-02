import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './Components/table/table.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { ColorDirective } from './Directives/color.directive';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TasksComponent,
    CategoriesComponent,
    ColorDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
