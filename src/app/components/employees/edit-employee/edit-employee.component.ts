import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeDetails: Employee = {
    empID: 0,
    name: '',
    email: '',
    address: '',
    mobile: '',
    salary: 0,
    department: '',
    doj: '',
    isActive: true
  };

  constructor(private route:ActivatedRoute, private employeeService:EmployeesService, 
    private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(param) => {
        const id =param.get('empID');
        if(id) {
            this.employeeService.getEmployeebyID(id)
            .subscribe({
              next : (response) => {
                  this.employeeDetails = response;
              }
            });
        }
      }
    })
  }

  updateEmployee(){
    
    this.employeeService.updateEmployee(this.employeeDetails.empID,this.employeeDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    });
  }

  deleteEmployee(empID:any) {
    this.employeeService.deleteEmployee(empID)
    .subscribe({
      next: (response) => {
        this.router.navigate(['employees']);
      }
    });
  }

}
