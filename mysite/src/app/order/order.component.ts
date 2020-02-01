import { Component, OnInit} from '@angular/core';
import { OrderService } from '../order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit  {
    ngOnInit() {}
    user_id:0
    amount:any[]
    service :OrderService
    constructor( service: OrderService,private router:Router) 
      {
       this.service = service
       this.user_id = localStorage['user_id']
       
      this.getOrders()
    }
    getOrders()
    {
      localStorage['login_status'] = '0'
      
      this.service.get(this.user_id)

      .subscribe(response => {
        if (response['status'] == 'success') {
         console.log (response['data'])
        this.amount = response['data']
        } else {
          console.log(response['error'])
        }
      })
  }
 
}
 