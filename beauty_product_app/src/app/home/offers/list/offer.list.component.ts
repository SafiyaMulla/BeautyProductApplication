import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import{ OfferService} from '../offer.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './offer.list.component.html',
  styleUrls: ['./offer.list.component.css']
})
 export class OfferListComponent implements OnInit 
 {
  products: any[]
  service: OfferService

  constructor(service: OfferService,private router:Router) {
    this.service = service
    this.getproducts()
  }
  onAdd() {
    this.router.navigate(['/offer-add'])
  }
  
  getproducts() {
    this.service.get()
      .subscribe((response) => {
        if (response['status'] == 'success') {
          this.products = response['data']
          console.log(response['data'])
        } else {
          alert('error occured:')
          console.log(response['error'])
        }
      })
  }

  loadCategories() 
  {
    this.service
      .get()
      .subscribe(response =>
         {
        if (response['status'] == 'success') 
        {
          this.service = response['data']
        }
      })
  }

  onDelete(offer_id: number) {
    this.service
      .deleteProduct(offer_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          alert('deleted offer successfully')
          console.log('error')
          this.loadCategories()
        } else {
          console.log(response['error'])
        }
      })
  
}



  ngOnInit() { }

 }
