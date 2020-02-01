import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

  url = 'http://localhost:4000'

  constructor(private http: HttpClient) { }
 
  getCartItems(user_id: number) {
  
    return this.http.get(this.url+'/cart/add_cart/'+user_id)
    
   }

  deleteCartItem(cart_id:number)
  {
    return this.http.delete(this.url+'/cart/delete_cart/'+cart_id)

  }
  get(user_id) {
    return this.http.get(this.url+'/order/place_order/'+user_id)
  }
//  deleteorder(user_id)
//  {
//   return this.http.delete(this.url+'/order/placedorder/'+user_id)
//  }

}