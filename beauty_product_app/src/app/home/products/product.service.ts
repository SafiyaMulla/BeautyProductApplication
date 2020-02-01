import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class ProductService
 {

  http: HttpClient
  url = 'http://localhost:4000/product'

  constructor(http: HttpClient) 
  {
    this.http = http
  }
  getProductDetails(id: number) {
    return this.http.get(this.url + '/details/' + id)
  }
  get() 
  {
    return this.http.get(this.url)
  }
  addProducts(product_name:string,product_description:string,product_price:number,category_id:number,file:any)
   {
    const body = new FormData()
    body.append('product_name',product_name)
    body.append('product_description',product_description)
    body.append('product_price',''+product_price)
    body.append('category_id',''+ category_id)
    body.append('thumbnail', file)
    
    return this.http.post(this.url, body)
    
    }
    deleteProduct(product_id: number) {
      return this.http.delete(this.url + '/' + product_id)
    }
    Updateproducts(product_name: string,product_description:string,product_price:number,category_id:number,product_id:number ) {
  
      const body = {
        product_name : product_name,
        product_description : product_description,
        product_price : product_price,
        category_id : category_id
        
      }
  
      return this.http.put(this.url + '/' + product_id, body)
    }
   
  }

 

 

