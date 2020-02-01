import { Component,OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import {  ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
  
})
export class AddCartComponent implements OnInit 
{
    products :[]
    product_id:0
    product_price:0
    thumbnail:''
    user_id:0
    amount : 0

    service :CartService
    constructor( 
        service: CartService,
        private router: Router,
        private activateRoute:ActivatedRoute) 
      {
       this.service = service
       this.user_id = localStorage['user_id']
       this.getAllProducts()
       this.getOrders()
      // this.onplace()
      
    }
    getAllProducts() 
    {
      if (localStorage['login_status'] == '0')
      {
        alert("please login before")
        this.router.navigate(['/user-login'])

      }
       else if(localStorage['login_status'] == '1')
      {
      this.service.getCartItems(this.user_id)
  
        .subscribe(response => {
          if (response['status'] == 'success') {
            console.log(response['data'])
            this.products = response['data']
          } else {
            console.log(response['error'])
          }
        })
      }
    }

    ngOnInit() {}
    onDelete(cart_id: number) {
      this.service
        .deleteCartItem(cart_id)
        
        .subscribe(response => {
          if (response['status'] == 'success') {
           
            alert('deleted cart item  successfully')
            this.loadCart()
            console.log('error')
           
          } else {
            console.log(response['error'])
          }
        })}
        loadCart() 
  {
    this.service
      .getCartItems(this.user_id)
      .subscribe(response =>
         {
        if (response['status'] == 'success') 
        {
          this.service = response['data']
          
        }
        
      })
  }
    onAmount(products)
    {
      console.log(products.product_price)
      
    }
    onplace()
    {
      // this.service.deleteorder(this.user_id)
      // .subscribe(response => {
      //   if (response['status'] == 'success') {
      //   // console.log (response['data'])
      //    //this.amount = (response['data'])

      //   } else {
      //     console.log(response['error'])
      //   }
     
      // })
      
      this.router.navigate(['/order-place'])
    }
    getOrders()
    {
         
      this.service.get(this.user_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
         console.log (response['data'])
         //this.amount = (response['data'])

        } else {
          console.log(response['error'])
        }
     
      })
  }
}
