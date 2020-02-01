import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../../category/category.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product.add.component.html',
  styleUrls: ['./product.add.component.css']
})
export class ProductAddComponent implements OnInit {

    Categories=[]
    product_name:" "
    product_description:" "
    product_price:number
    category_id:number
    thumbnail: any
    constructor(
      private router: Router,
      private CategoryService: CategoryService,
      private ProductService:ProductService)
       {
  
      this.CategoryService
        .get()
        .subscribe(response => {
          if (response['status'] == 'success') 
          {
            this.Categories = response['data']
         this.category_id= this.Categories[0].id
          } else 
          {
            console.log(response['error'])
          }
        })
    }
  
  
    ngOnInit() { }
    onSelectFile(event) {
      this.thumbnail = event.target.files[0]
    }
  
    onAdd() {
      this.ProductService
        .addProducts(this.product_name,this.product_description,this.product_price,this.category_id,this.thumbnail)
        .subscribe(response => {
          console.log(response['data'])
          if (response['status'] == 'success') {
            alert('added products successfully')
            
          } else {
            console.log(response['error'])
          }
        })
    }
    onCancel()
    {
      this.router.navigate(['/products-list'])
    }
  }
  