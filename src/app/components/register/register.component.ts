import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerequest : User = {
    
    userid:0,
    username: '',
    email: '',
    password: '',
    role:'User',
  };

  constructor(private nav:NavbarService,private toastr: ToastrService, private service:EmployeesService, private router:Router) { }

  ngOnInit(): void {

    this.nav.show();

  }

  Register()
  {

      this.service.getUserbyEmail(this.registerequest.email).subscribe(
        (res)=>
        {
          if(res!=null)
          {
            this.toastr.info('User Already Exists!', 'Sign Up Failed.', {timeOut:5000});
          }
        },
          err =>
        {
            this.service.addUser(this.registerequest).subscribe
            ({
             next: (user) => 
             {
            console.log(user);
            this.toastr.success('New User Created!', 'Sign Up Succesful.', {timeOut:5000});
            this.router.navigate(['employees/login']);
            }
            })
        }
        
  )}
      
    
  }


