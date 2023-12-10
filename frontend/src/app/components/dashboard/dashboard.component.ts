import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private _productService:ProductService){
    
    this.getProducts();
  }

  getProducts(){
    this._productService.getProducts().subscribe(data =>{
      console.log(data);
    });
  }
}
