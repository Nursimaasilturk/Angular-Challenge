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
import { AnimateComponent } from './animate/animate.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    TasksComponent,
    CategoriesComponent,
    ColorDirective,
    AnimateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
