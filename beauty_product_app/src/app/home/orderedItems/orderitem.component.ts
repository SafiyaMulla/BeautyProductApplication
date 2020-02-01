import { Component,OnInit } from '@angular/core';
import{OrderItemService} from '../orderedItems/orderitem.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-order-item',
  templateUrl: './orderitem.component.html',
  styleUrls: ['./orderitem.component.css']
})
export class OrderItemComponent implements OnInit{
    service: OrderItemService
    orderItems : any[]
    constructor(service:  OrderItemService,private router:Router) {
      this.service = service
      this.getOrderItems()
  
    }
    getOrderItems() {
        this.service.get()
          .subscribe((response) => {
            if (response['status'] == 'success') {
              this.orderItems = response['data']
            } else {
              alert('error occured:')
              console.log(response['error'])
            }
          })
      }
    ngOnInit(){}
}
