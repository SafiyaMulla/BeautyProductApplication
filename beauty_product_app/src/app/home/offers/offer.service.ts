import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class OfferService
 {

  http: HttpClient
  url = 'http://localhost:4000/offer'

  constructor(http: HttpClient) 
  {
    this.http = http
  }
//   getProductDetails(id: number) {
//     return this.http.get(this.url + '/details/' + id)
//   }

addProducts(product_name:string,product_description:string,product_price:number,discount:number,final_price:number,file:any)
   {
    const body = new FormData()
    body.append('product_name',product_name)
    body.append('product_description',product_description)
    body.append('product_price',''+product_price)
    body.append('discount',''+discount)
    body.append('final_price',''+ final_price)
    body.append('thumbnail', file)
    
    return this.http.post(this.url, body)
    
    }

  get() 
  {
    return this.http.get(this.url)
  }
  deleteProduct(offer_id: number) {
    return this.http.delete(this.url + '/' + offer_id)
  }
}