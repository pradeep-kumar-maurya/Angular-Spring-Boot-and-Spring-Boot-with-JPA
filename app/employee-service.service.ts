import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class Employee{

  eid:number;
  ename:string;
  esal:number;
  constructor(eid:number, ename:string, esal:number){
          this.eid = eid;
          this.ename = ename;
          this.esal = esal;
      }
}

@Injectable({ 
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http:HttpClient) { }

  emp:Employee;

  public create(emp){
    console.log(emp);
    return this.http.post("http://localhost:1234/createEmployee",emp,{responseType: 'text'});
  }

  public getallEmployees(){
    return this.http.get("http://localhost:1234/fetchAllEmployees",{responseType: 'json'});
  }

  public getEmployeeDetails(id:number){
    
    return this.http.get("http://localhost:1234/getEmployeeDetails/"+id,{responseType: 'json'});
  }

  public deleteEmployee(id:number){
    return this.http.delete("http://localhost:1234/deleteEmployee/"+id,{responseType:'json'});
  }

  public updateEmployeeDetails(employee:any){
    return this.http.put("http://localhost:1234/updateEmployee",employee,{responseType:'text'});
  }
}

