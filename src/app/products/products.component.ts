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
    this.getProducts();
  }

   getProducts(){
      
       this.productService.getProducts().subscribe( p=>{this.products=p});
  }
  
  deleteProduct(id:number)
  {   console.log(id);
      this.productService.deleteProduct(id).subscribe();
     // this.ngOnInit();
      this.products=this.products.filter(p=>p.productID!=id);
    
  }

  onSelectedProduct(product: Product)
  {
    return this.selectedProducts=product;
  }

}
