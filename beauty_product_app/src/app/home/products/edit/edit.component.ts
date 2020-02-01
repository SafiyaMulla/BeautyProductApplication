import { Component,OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../../category/category.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class ProductEditComponent implements OnInit {

    Categories=[]
    products =[]
    product_name:" "
    product_description:" "
    product_price:number
    category_id:number
    thumbnail: any
    product_id = 0
    constructor(private router: Router,
      private categoryService: CategoryService,
      private ProductService : ProductService,
      private activatedRoute: ActivatedRoute)
       {
         this.onUpdate()
          //  this.onUpdate()
          // this.categoryService.get()
          // .subscribe(response =>{
          //     if (response['status'] == 'Success') {
          //         this.Categories = response['data']
          //         this.category_id = this.Categories[0].id
          //       } else {
          //         console.log(response['error'])
          //       }
          // })
      
          // this.product_id = this.activatedRoute.snapshot.params['id']
          // console.log(this.product_id)
          //   if(this.product_id)
          //   {
          //       this.ProductService.getProductDetails(this.product_id)
          //       .subscribe(response =>{
          //           if(response['status'] == 'Success')
          //           {
          //               const product = response['data']
          //               console.log(product)
          //               this.product_name = product[0].product_name
          //               this.product_description = product[0].product_description
          //               this.product_price = product[0].product_price
          //               this.category_id = product[0].category_id
          //               this.thumbnail = product[0].thubmnail
                        
          //           }
          //       })
          //   }

         }
           
       
    ngOnInit() { }

  
    onFileChange(event) {
      this.thumbnail = event.target.files[0]
    }

  onUpdate(){
      this.ProductService.Updateproducts(this.product_name,this.product_description,this.product_price,this.category_id,this.product_id)
     
      .subscribe(response =>{
          if (response['status'] == 'Success') {
              console.log(response['data'])
              this.router.navigate(['/products-list'])
            } else {
              console.log(response['error'])
              
            }
      })
  }
  
  
}
  