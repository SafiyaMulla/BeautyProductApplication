import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  customer_name = ''
  product_name = ''

  constructor(private router: Router) {
    this.customer_name = localStorage['customer_name']
  }
  onLogout() {
    // remove the login status
     localStorage.removeItem('login_status')
    sessionStorage['login_status'] = '0'
    localStorage['login_status'] = '0'
    localStorage['customer_name']='0'
    localStorage['user_id']='0'
    this.router.navigate(['/user-login'])
   // this.router.navigate(['routerLink="/user-login"'])
  }
  onsearch(product_name:string)
  {
      const body={
          product_name:product_name
         
      }
      console.log(product_name)
      this.router.navigate(['routerLink="/app-search/"'])
  }
 
}
