import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';
import { Login } from '../models/login.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl :string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  getEmployee():Observable<Employee[]> {
   return this.http.get<Employee[]>(this.baseApiUrl + '/api/Employees')
  }

  addEmployee(addEmployeeRequest:Employee): Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl + '/api/Employees',addEmployeeRequest);
  }

  getEmployeebyID(id: any) : Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl + '/api/Employees/'+id);
  }

  updateEmployee(id: any, updateEmployeeRequest:Employee):Observable<Employee> {
    return this.http.put<Employee>(this.baseApiUrl + '/api/Employees/'+id , updateEmployeeRequest);
  }

  deleteEmployee(id : any):Observable<Employee> {
    return this.http.delete<Employee>(this.baseApiUrl + '/api/Employees/'+id);
  }

  addUser(addUserRequest:User): Observable<User>{
    return this.http.post<User>(this.baseApiUrl + '/api/Users',addUserRequest);
  }

  getUserbyEmail(email: any) : Observable<User>{
    return this.http.get<User>(this.baseApiUrl + '/api/Users/email='+email);
  }

  login(formData:Login){
    return this.http.post<Login>(this.baseApiUrl + '/api/Users/Login',formData);
  }

  getUserProfile(){
    var tokenHeader = new HttpHeaders({'Authorization': 'Bearer '+ localStorage.getItem('token')});
    return this.http.get(this.baseApiUrl + '/api/Users/GetUserProfile',{ headers : tokenHeader});
  }
}
