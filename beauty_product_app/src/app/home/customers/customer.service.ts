import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class CustomerService {
  http: HttpClient
  url = 'http://localhost:4000/customer'

  constructor(http: HttpClient) {
    this.http = http
  }
  get() 
  {
    return this.http.get(this.url)
  }
  deleteCustomer(user_id: number) {
    return this.http.delete(this.url + '/' + user_id)
  }
}