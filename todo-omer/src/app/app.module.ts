import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import {TaskComponent} from "./components/task/task.component";
import { CreatorComponent } from './components/creator/creator.component';
import { FormsModule } from '@angular/forms';
import { CompletedTaskComponent } from './components/completed-task/completed-task.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskListComponent,
    CreatorComponent,
    CompletedTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
