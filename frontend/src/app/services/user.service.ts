import { Injectable } from '@angular/core';
//import { environment } from 'src/environments/environment';
import { user } from '../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl:any;
  private myApiUrl:string;

  constructor(private http:HttpClient) { 
    this.myAppUrl='http://localhost:3001/'
    this.myApiUrl='api/usuarios'
  }
  signIn (user:user):Observable<any> {

    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,user);
  }
}
