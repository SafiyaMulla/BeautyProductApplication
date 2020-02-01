import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrderService {

  url = 'http://localhost:4000'

  
  constructor(private http: HttpClient) { }
 
  get(user_id) {
    return this.http.get(this.url+'/order/place_order/'+user_id)
  }
 

 
  



}