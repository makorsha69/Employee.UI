import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  userDetails : any;

  constructor(private router:Router, private service:EmployeesService) { }

  ngOnInit(): void {

    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
        console.log(this.userDetails);
      },
      err => {
        console.log(err);
      },
    );

  }

  Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigateByUrl('/employees/login');
  }

}
