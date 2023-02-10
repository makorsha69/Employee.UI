import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Login } from 'src/app/models/login.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest : Login = {
    
    email: '',
    password: '',
  };

  constructor(private service:EmployeesService, private toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
  }

  Login(form:NgForm){

    this.service.login(form.value).subscribe(
      (res:any)=>{localStorage.setItem('token',res.token);
      if(form.value.email=='admin@admin.com')
      {
        this.toastr.success('ADMIN', 'Hello Admin', {timeOut:5000});
        this.router.navigateByUrl('/employees');
      }
      else
      {
      this.toastr.success('USER', 'Hello User', {timeOut:5000});
      }
    },
      err => {
        if(err.status==400)
        this.toastr.error('Invalid Username or Password', 'Authentication Failed', {timeOut:5000});
        else
        console.log(err);
      }
    );
    
  }

}
