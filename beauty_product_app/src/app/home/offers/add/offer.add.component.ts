import { Component,OnInit } from '@angular/core';
import { OfferService } from '../offer.service';


import { Router } from '@angular/router';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer.add.component.html',
  styleUrls: ['./offer.add.component.css']
})
export class OfferAddComponent implements OnInit {

    Categories=[]
    product_name:" "
    product_description:" "
    product_price:number
    discount:number
    final_price:number
    thumbnail: any
    constructor(
      private router: Router,
      
      private OfferService:OfferService)
       {
  this.onAdd()
       }
       onSelectFile(event) {
        this.thumbnail = event.target.files[0]
      }
    
      onAdd() {
        this.OfferService.addProducts
          (this.product_name,this.product_description,this.product_price,this.discount,this.final_price,this.thumbnail)
          .subscribe(response => {
            console.log(response['data'])
            if (response['status'] == 'success') {
              alert('added products successfully')
              
            } else {
              console.log(response['error'])
            }
          })
      }
      ngOnInit(){}
      onCancel()
      {
        this.router.navigate(['/offer-list'])
      }
    }