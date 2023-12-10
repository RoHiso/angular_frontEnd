import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
username:string='';
password:string='';
confirmPass:string='';
loading:boolean=false;

constructor(private _userServices: UserService,
            private toastr:ToastrService,
            private router:Router,
            private _errorService: ErrorService){

}

addUser(){
  //validamos que todos los campos tengan valores
  if (this.username =='' || this.password == '' || this.confirmPass == '') {
    this.toastr.error('Todos los campos son obligatorios', 'Error!!');
    return;
  }
  //validamos contraseñas
  if (this.password != this.confirmPass) {
    this.toastr.error('Las contraseñas nos son iguales', 'Error de Contraseña!!');
    return;
    
  }
  
  //creamos el objeto Usuario y luego lo insertamos en la BD
  const user:User={
    username:this.username,
    password:this.password
  }
  this.loading=true;
  this._userServices.signIn(user).subscribe({
   
    next:(v)=> {
      this.loading=false;  
      this.toastr.success('El usuario fue registrado con exito','Usuario Registrado!!');
      this.router.navigate(['/login']);
      
    },
    error:(e: HttpErrorResponse) =>{
      this.loading = false;
      this._errorService.msjError(e);
      
    },
    complete:()=> console.info('Completado')
  })

}
 

}
