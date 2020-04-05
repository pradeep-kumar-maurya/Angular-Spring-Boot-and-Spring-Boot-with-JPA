import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeServiceService } from './employee-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { FetchEmployeeComponent } from './fetch-employee/fetch-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { FetchAllEmployeeComponent } from './fetch-all-employee/fetch-all-employee.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    SearchDeleteComponent,
    FetchEmployeeComponent,
    UpdateEmployeeComponent,
    FetchAllEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
