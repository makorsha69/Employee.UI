import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserDashboardComponent } from './components/user/user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'employees',component:EmployeesListComponent,canActivate:[AuthGuard]},
  {path:'employees/add',component:AddEmployeeComponent, canActivate:[AuthGuard]},
  {path:'employees/edit/:empID',component:EditEmployeeComponent, canActivate:[AuthGuard]},
  {path:'employees/login',component:LoginComponent},
  {path:'employees/register',component:RegisterComponent},
  {path:'employees/user',component:UserDashboardComponent, canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
