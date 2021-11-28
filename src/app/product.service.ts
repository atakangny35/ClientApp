import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Model, Product } from './model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  URL:string='https://localhost:44372/';
  model =new Model();

 
  getProducts(): Observable<Product[]>{
    
    return this.http.get<Product[]>(this.URL+'api/product')
  }

  addProduct(product : Product) :Observable<Product>
  { let json = JSON.stringify(product);
    //console.log(json);

    return  this.http.post<Product>(this.URL+'api/product',product);
     
    //this.model.products.push(product);
  }

  deleteProduct(id:number)//:Observable<any>
  {  //this.model.products= this.model.products.filter(p=>p.productID!=id);
    console.log(this.URL+'api/product'+'/'+ id);
     return this.http.delete(this.URL+'api/product'+'/'+ id);
    
  }

  updateProduct(product:Product)
  {
    return this.http.put(this.URL+'api/product/'+product.productID,product);
  }
  getProductById(id :number)
  {
     let product  = this.model.products.filter(p=>p.productID==id);
      return product[0];
  }

  constructor(private http :HttpClient) { }
}
