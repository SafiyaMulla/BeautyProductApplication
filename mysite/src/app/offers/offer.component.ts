import { Component, OnInit} from '@angular/core';
import { OfferService } from '../offers/offer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})

export class OfferComponent implements OnInit  {
 
//product_id:0
  products: any[]
  user_id:0
  service :OfferService
  constructor( service: OfferService,private router:Router) 
    {
     this.service = service
     this.user_id = localStorage['user_id']
     
    this.getAllProducts()
  }
  
  getAllProducts() 
  {
    this.service.get()

      .subscribe(response => {
        if (response['status'] == 'success') {
          this.products = response['data']
        } else {
          console.log(response['error'])
        }
      })
  }
 
  onCart(product_id:number){
    if (localStorage['login_status'] == '0')
    {
      alert("please login before")
    }
     else if(localStorage['login_status'] == '1')
    {
    console.log("inside cart")
    this.service
    .addToCart(this.user_id,product_id)
    .subscribe(response => {
      if (response['status'] == 'success') {
        //this.products = response['data']
        console.log(response['data'])
      } else {
        console.log(response['error'])
      }
    })
    }  
    
}

 
    ngOnInit() {}
}