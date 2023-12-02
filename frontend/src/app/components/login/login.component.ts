import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
username:string='';
password:string='';
loading:boolean=false;

constructor(private _userServices:UserService,
            private toastr:ToastrService,
            private router: Router,
            private error:ErrorService){

            }


  login(){

  //PRIMERO VALIDAMOS QUE LOS CAMPOS TENGAN ALGO
    if (this.username=='' || this.password=='') {
      this.toastr.error('Se deben ingresar los campos obligatorios', 'Error!!');      
      return;
    }

    //creamos el objeto Usuario
    const user:User={
      username:this.username,
      password:this.password
    }
    this.loading=true;
    this._userServices.login(user).subscribe({
      next:(token) => { 
        //el parametro v nos retorna el token desde el Back - que luego lo pasamos por localStorage
        this.loading=false;
        localStorage.setItem('token', JSON.stringify (token));
        this.router.navigate(["/dashboard"]);
        
      },
      error:(e: HttpErrorResponse) =>{
        this.loading = false;
        this.error.msjError(e);
        
      }
    })
}

}
