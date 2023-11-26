import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { user } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  username:string='';
  password:string='';
  confirmPass:string='';

  constructor (private toastr: ToastrService,
               private _userService: UserService, 
               private router:Router ) {}
  
  ngOnInit():void{}

  addUser(){

    //Validamos que el usuario ingrese valores
    if (this.username =='' || this.password =='' || this.confirmPass =='') {
      
      this.toastr.error('Todos los campos son Obligatorios', 'Error!');
      return;
    }

    //Validamos que las passwords sean iguales  
    if (this.password != this.confirmPass) {
      
      this.toastr.error('Las contraseñas no coinciden', 'Error!!');
      return;
    }
      
    //Insertamos el usuario ya logueado- para eso primero debemos crear el objeto user
    const user:user ={
      username:this.username,
      password:this.password
    }
    this._userService.signIn(user).subscribe(data =>{
      this.toastr.success(`El usuaro ${this.username} fue registrado con exito`, 'Usuario Registrado');
      this.router.navigate(['login'])
    })

  }
}
