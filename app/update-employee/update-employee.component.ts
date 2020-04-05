import { Component, OnInit } from '@angular/core';

import { EmployeeServiceService, Employee } from '../employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee:Employee = new Employee(0,"abc",0);
  employee1:Employee = new Employee(0,"",0);
  message:string;
  check:boolean=false;
  allemployee:any;
  click:boolean=false;
  constructor(private service:EmployeeServiceService) { }

  ngOnInit(): void {
    this.service.getallEmployees().subscribe((data)=>this.allemployee=data);
  }

  updateEmployee(employeeData:Employee){
    this.employee1 = employeeData;
    this.click = true;
  }

  clickMe(){
    this.click = true;
  }

  updateDetails(){
    this.service.updateEmployeeDetails(this.employee1).subscribe((data)=>this.message=data);
    this.check=true;
  }
}
