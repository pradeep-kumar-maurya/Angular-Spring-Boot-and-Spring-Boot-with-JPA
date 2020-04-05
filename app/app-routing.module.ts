import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { FetchEmployeeComponent } from './fetch-employee/fetch-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FetchAllEmployeeComponent } from './fetch-all-employee/fetch-all-employee.component';


const routes: Routes = [
  {path:'Create-Employee', component:CreateEmployeeComponent},
  {path:'Delete-Employee',component:SearchDeleteComponent},
  {path:'Fetch-Employee', component:FetchEmployeeComponent},
  {path:'Update-Employee', component:UpdateEmployeeComponent},
  {path:'Fetch-All-Employees',component:FetchAllEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
