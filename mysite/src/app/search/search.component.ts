import { Component, OnInit} from '@angular/core';
import { SearchService } from '../search/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit  {
 

  products: any[]
  user_id : 0
  product_name:''
  service :SearchService
  constructor( service: SearchService,private router:Router) 
    {
     this.service = service
  
     //this.user_id = localStorage['user_id']
    this.getAllProducts()
  }

  getAllProducts() 
  {
    
    this.service.get(this.product_name)
    
      .subscribe(response => {
       
        if (response['status'] == 'success')
         {
          
         console.log(response['data'])
         this.products = response['data']
        } else 
        {
          console.log(response['error'])
          alert("error")
          
        }
      })
  }
  onCart(product_id:number){
    if (localStorage['login_status'] == '0')
    {
      alert("please login")
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