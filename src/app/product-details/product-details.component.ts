import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input()  product !:Product;
  @Input()  products !:Product[];
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }
  updateProduct(name:string,price,isactive:boolean,prod:Product)
  {  const _prod =new Product(prod.productID,name,price,isactive);
    this.productService.updateProduct(_prod)
    .subscribe(result =>
      {   
          this.products.splice(this.products.findIndex(x=>x.productID==_prod.productID),1,_prod);
          console.log(this.products[this.products.findIndex(x=>x.productID==_prod.productID)]);
      });
  }
  
}
