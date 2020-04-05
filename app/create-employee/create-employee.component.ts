import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService, Employee } from '../employee-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee:Employee = new Employee(0,"",0);

  message:string;
  constructor(private service:EmployeeServiceService) { }

  ngOnInit(): void {  
  }

  employeeRegister(){
    if(this.employee.eid != 0 && this.employee.ename != "" && this.employee.esal != 0){
      this.service.create(this.employee).subscribe((data)=>this.message=data);
  }
  else{
    this.message = "Sorry!! employee was not inserted";
  }
  }
}
