import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class OrderItemService {
  http: HttpClient
  url = 'http://localhost:4000/orderItem/orderitems_list'

  constructor(http: HttpClient) {
    this.http = http
  }
  get() 
  {
    return this.http.get(this.url)
  }
}