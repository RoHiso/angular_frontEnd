import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  username:string='';
  password:string='';
  confirmPass:string='';
  constructor(){}
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
