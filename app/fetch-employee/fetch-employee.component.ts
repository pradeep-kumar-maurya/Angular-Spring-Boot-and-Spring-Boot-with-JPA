import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService, Employee } from '../employee-service.service';

@Component({
  selector: 'app-fetch-employee',
  templateUrl: './fetch-employee.component.html',
  styleUrls: ['./fetch-employee.component.css']
})
export class FetchEmployeeComponent implements OnInit {

  employee:any;

  id:number;

  check:boolean = false;
  check1:boolean = false;

  constructor(private service:EmployeeServiceService) { }

  ngOnInit(): void {
  }

  fetchEmployee(){
    this.service.getEmployeeDetails(this.id).subscribe((data)=>this.employee=data);
    if(this.employee == null){
      this.check1 = true;
      this.check = false;
    }
    else{
      this.check1 = false;
      this.check = true;
    }
  }
}
