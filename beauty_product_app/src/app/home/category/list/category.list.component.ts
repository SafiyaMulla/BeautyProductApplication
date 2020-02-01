import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';



@Component({
  selector: 'app-category-list',
  templateUrl: './category.list.component.html',
  styleUrls: ['./category.list.component.css']
})
 export class CategoryListComponent implements OnInit 
 {
  categories: any[]
  service: CategoryService

  constructor(service: CategoryService,private router:Router) {
    this.service = service
    this.getCategories()
  }

  getCategories() {
    this.service.get()
      .subscribe((response) => {
        if (response['status'] == 'success') {
          this.categories = response['data']
        } else {
          alert('error occured:')
          console.log(response['error'])
        }
      })
  }

  ngOnInit() { }

  onAdd() {
    this.router.navigate(['/category-add'])
  }
  loadCategories() 
  {
    this.service
      .get()
      .subscribe(response =>
         {
        if (response['status'] == 'success') 
        {
          this.categories = response['data']
        }
      })
  }
  onDelete(category_id: number) {
    this.service
      .deleteCategory(category_id)
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
