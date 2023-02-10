import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-nav',
  templateUrl: './logout-nav.component.html',
  styleUrls: ['./logout-nav.component.css']
})
export class LogoutNavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    this.router.navigateByUrl('/employees/login');
  }
}
