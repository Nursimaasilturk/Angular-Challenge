import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddingListComponent } from './Components/adding-list/adding-list.component';
import { TableComponent } from './Components/table/table.component';

const routes: Routes = [
  { path: 'adding-list-component', component: AddingListComponent },
  { path: 'table-component', component: TableComponent },
  { path: 'app-component', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
