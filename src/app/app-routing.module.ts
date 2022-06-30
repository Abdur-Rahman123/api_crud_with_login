import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashbordComponent } from './employee-dashbord/employee-dashbord.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path: 'login',component: LoginComponent},
   {path:'',redirectTo: '/login',pathMatch: 'full'},
  {path: 'employee',canActivate:[AuthGuard],component: EmployeeDashbordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
