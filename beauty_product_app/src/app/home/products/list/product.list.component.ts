import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import{ ProductService} from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product.list.component.html',
  styleUrls: ['./product.list.component.css']
})
 export class ProductListComponent implements OnInit 
 {
  products: any[]
  service: ProductService

  constructor(service: ProductService,private router:Router) {
    this.service = service
    this.getproducts()
  }
  onAdd() {
    this.router.navigate(['/product-add'])
  }
  
  getproducts() {
    this.service.get()
      .subscribe((response) => {
        if (response['status'] == 'success') {
          this.products = response['data']
        } else {
          alert('error occured:')
          console.log(response['error'])
        }
      })
  }

  ngOnInit() { }



  loadCategories() 
  {
    this.service
      .get()
      .subscribe(response =>
         {
        if (response['status'] == 'success') 
        {
          this.service = response['data']
        }
      })
  }
  onSelect(product_id:number){
    console.log(product_id)
    this.router.navigate(['/product-edit'+'/'+product_id])
}
  onDelete(product_id: number) {
    this.service
      .deleteProduct(product_id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          alert('deleted category successfully')
          console.log('error')
          this.loadCategories()
        } else {
          console.log(response['error'])
        }
      })

     
  }
  
}
