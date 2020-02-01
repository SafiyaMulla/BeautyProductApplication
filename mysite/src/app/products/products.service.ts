import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService {

  url = 'http://localhost:4000/product'

  constructor(private http: HttpClient) { }

  

 
  get() {
    return this.http.get(this.url)
  }

  

  


}