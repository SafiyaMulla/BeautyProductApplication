import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../products/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit  {
 

  products: any[]
  category_id:number
  productservice :ProductsService
  constructor( productService: ProductsService) 
    {
     this.productservice = productService
     this.category_id = this.category_id
    
    this.getAllProducts()
  }

  getAllProducts() 
  {
    this.productservice
    .get()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.products = response['data']
        } else {
          console.log(response['error'])
        }
      })
  

  }
 
    ngOnInit() {}
}