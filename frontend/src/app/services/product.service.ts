import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private myAppUrl:any;
  private myApiUrl:string;

  constructor(private http:HttpClient) { 
    this.myAppUrl='http://localhost:3001/'
    this.myApiUrl='api/productos'  
  }

  getProducts():Observable<Product[]>{
    const token= localStorage.getItem('token');
    console.log(typeof token);
   
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`)
    return this.http.get<Product[]>(`${this.myAppUrl}${this.myApiUrl}`, {headers: headers});
  }
}
