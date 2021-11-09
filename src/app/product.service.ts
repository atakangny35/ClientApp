import { Injectable } from '@angular/core';
import { Model, Product } from './model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  model =new Model();

 
  getProducts(){
    return this.model.products;
  }

  addProduct(product : Product){

    this.model.products.push(product);
  }

  deleteProduct(id)
  {  this.model.products= this.model.products.filter(p=>p.id!=id);
    
    //this.model.products.splice(id,1);
  }
  constructor() { }
}
