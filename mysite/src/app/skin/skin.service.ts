import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SkinService {

  url = 'http://localhost:4000'

  
  constructor(private http: HttpClient) { }
 
  get() {
    return this.http.get(this.url+'/product/cat_product/5')
  }
  
  post(user_id:number,product_id:number)
  {
      const body={
         user_id:user_id
      }
        return this.http.post(this.url+'/register',body)
        
  }

  addToCart(user_id:number,product_id:number)
  {
      const body={
         user_id:user_id
      }
       // return this.http.post(this.url+'/'add-cart/',body)
       return this.http.post(this.url+'/cart/add/'+product_id,body)
        
  }



}