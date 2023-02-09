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
  p:number = 1;
  itemsPerPage:number = 5;
  totalItem:any;
  constructor(private employeeService:EmployeesService) { }

  ngOnInit(): void {

    this.employeeService.getEmployee().subscribe ({
      next: (employees) => {
        console.log(employees);
        this.employees = employees;
        this.totalItem = employees.length;
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
      headers: ["ID", "Name", "Email", "Contact no.", "Address", "Salary", "Department",  "Date", "Status"]
    };
   
    new ngxCsv(this.employees, "Report", options);
   

  }

}
