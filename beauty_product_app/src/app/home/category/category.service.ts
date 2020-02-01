import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class CategoryService {

  http: HttpClient
  url = 'http://localhost:4000/product/category'

  constructor(http: HttpClient) {
    this.http = http
  }
  deleteCategory(category_id: number) {
    return this.http.delete(this.url + '/' + category_id)
  }

  get() {
    return this.http.get(this.url)
  }
  addCategory(category_name: string) {
    const body = {
     'category_name':category_name
     
    }
    

    return this.http.post(this.url, body)


    
  }

 

 
}
