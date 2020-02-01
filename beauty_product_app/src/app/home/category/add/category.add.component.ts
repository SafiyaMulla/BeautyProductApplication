import { Component,OnInit } from '@angular/core';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-category-add',
  templateUrl: './category.add.component.html',
  styleUrls: ['./category.add.component.css']
})
export class CategoryAddComponent implements OnInit {

    service:CategoryService
   category_name: string
    
  
    constructor(categoryService: CategoryService) {
      this.service = categoryService
    }
  
    ngOnInit() { }
  
    onAdd() {
      this.service
        .addCategory(this.category_name)
        .subscribe(response => {
          
          
            if (response['status'] == 'success') {
              alert('added category successfully')
              
             
            } else {
              console.log(response['error'])
            }
          })
    }
  
    onCancel() {
      alert('cancel')
    }
  }
