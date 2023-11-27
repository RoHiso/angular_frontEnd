import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
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

constructor(private _userServices: UserService,
            private toastr:ToastrService,
            private router:Router){

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
  this._userServices.signIn(user).subscribe(data =>{
    this.toastr.success('El usuario fue registrado con exito','Usuario Registrado!!');
    this.router.navigate(['/login']);
  })
}
}
