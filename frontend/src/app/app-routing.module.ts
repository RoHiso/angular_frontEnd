import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:'',redirectTo: 'login', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'signin', component:SigninComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'**', redirectTo:'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
