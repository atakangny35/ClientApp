import { Component, Input, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Product } from '../model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
 @Input() products !:Product[]
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
  }
  addProduct(name: string,price,isactive:boolean)
  {  const addedProd = new Product(0,name,price,isactive);
      this.productService.addProduct(addedProd).subscribe(p=> {
        this.products.push(p);
      })
  }
}
