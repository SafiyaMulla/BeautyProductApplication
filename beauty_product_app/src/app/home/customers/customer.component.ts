import { Component,OnInit } from '@angular/core';
import{CustomerService} from '../customers/customer.service'
import { Router } from '@angular/router'
@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
    service: CustomerService
    customers : any[]
    constructor(service: CustomerService,private router:Router) {
      this.service = service
      this.getCustomers()
  
    }
    getCustomers() {
        this.service.get()
          .subscribe((response) => {
            if (response['status'] == 'success') {
              this.customers = response['data']
            } else {
              alert('error occured:')
              console.log(response['error'])
            }
          })
      }
    ngOnInit(){}
    onDelete(user_id: number) {
      this.service
        .deleteCustomer(user_id)
        .subscribe(response => {
          if (response['status'] == 'success') {
            alert('deleted customer successfully')
            console.log('error')
            this.loadCategories()
          } else {
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
}
