import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SearchService {

  url = 'http://localhost:4000/product'

  
  constructor(private http: HttpClient) { }
 
  get(product_name:string) {
    const body={
      
      product_name:product_name
    }
    console.log(product_name)
    return this.http.post(this.url+'/search',body)
          
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
  

  



