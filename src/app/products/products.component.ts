import { Component, OnInit } from '@angular/core';
import { Model, Product } from '../model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService :ProductService) { 
  }
  products !: Product[];
  selectedProducts! :Product;
  ngOnInit(): void {
    this.products=this.productService.getProducts();
  }

  
  deleteProduct(id:number)
  {
      this.productService.deleteProduct(id);
      this.ngOnInit();
    
  }

  onSelectedProduct(product: Product){
    return this.selectedProducts=product;
  }

}
