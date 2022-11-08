import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './Components/table/table.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { ColorDirective } from './Directives/color.directive';
import { CommonModule } from '@angular/common';
import { AddingListComponent } from './Components/adding-list/adding-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TasksComponent,
    CategoriesComponent,
    ColorDirective,
    AddingListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
