import { Component,OnInit } from '@angular/core';
import{OrderService} from '../orders/order.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
    service: OrderService
    orders : any[]
    constructor(service:  OrderService,private router:Router) {
      this.service = service
      this.getOrders()
  
    }
    getOrders() {
        this.service.get()
          .subscribe((response) => {
            if (response['status'] == 'success') {
              console.log(response['data'])
              this.orders = response['data']
            } else {
              alert('error occured:')
              console.log(response['error'])
            }
          })
      }
    ngOnInit(){}
}
