import { Injectable } from '@angular/core';
//import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
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
  signIn (user:User):Observable<any> {

    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,user);
  }

  login (user:User):Observable<string>{
    return this.http.post<string>(`${this.myAppUrl}${this.myApiUrl}/login`,user);
  }
}
