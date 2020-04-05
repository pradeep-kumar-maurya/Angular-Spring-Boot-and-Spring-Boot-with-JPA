import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService, Employee } from '../employee-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-delete',
  templateUrl: './search-delete.component.html',
  styleUrls: ['./search-delete.component.css']
})
export class SearchDeleteComponent implements OnInit {

  employees:any;

  check:boolean = false;
  constructor(private service:EmployeeServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getallEmployees().subscribe((data)=>this.employees=data);
  }

  deleteEmployee(eid:number){
    this.service.deleteEmployee(eid).subscribe((data)=>this.employees=data);
    this.check = true;
    this.router.navigate[('Fetch-All-Employees')];
  }
}
