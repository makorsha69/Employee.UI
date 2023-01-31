import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  searchText : string = '';
  employees : Employee[] = [];
  constructor(private employeeService:EmployeesService) { }

  ngOnInit(): void {

    this.employeeService.getEmployee().subscribe ({
      next: (employees) => {
        console.log(employees);
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  download(){

    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Employee Details',
      useBom: true,
      noDownload: false,
      headers: ["ID", "Name", "Email", "Contact no.", "Address", "Department", "Salary", "Date", "Status"]
    };
   
    new ngxCsv(this.employees, "Report", options);
   

  }

}
