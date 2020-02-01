import { Component, OnInit} from '@angular/core';
import { SkinService } from '../skin/skin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skin',
  templateUrl: './skin.component.html',
  styleUrls: ['./skin.component.css']
})

export class SkinComponent implements OnInit  {
 

  products: any[]
  user_id : 0
  service :SkinService
  constructor( service: SkinService,private router:Router) 
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