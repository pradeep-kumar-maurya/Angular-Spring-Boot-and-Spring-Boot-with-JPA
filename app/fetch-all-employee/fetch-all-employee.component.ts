import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-fetch-all-employee',
  templateUrl: './fetch-all-employee.component.html',
  styleUrls: ['./fetch-all-employee.component.css']
})
export class FetchAllEmployeeComponent implements OnInit {

  employees:any;
  
  constructor(private service:EmployeeServiceService) { }

  ngOnInit(): void {
    this.service.getallEmployees().subscribe((data)=>this.employees=data);
  }

}
