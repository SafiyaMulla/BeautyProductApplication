import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
 
 email_id=''
 password=''

 constructor(
  private router: Router,
  
  private userService: UserService) { }

ngOnInit() { }
onLogout()
{
  sessionStorage['login_status'] = '0'
}
onLogin() {
  
  if (this.email_id.length == 0) {
    alert("enter valid user email id")
    
  } else if (this.password.length == 0) {
    alert("enter valid password")
  }
  // else if (this.password != this.confim_password) {
  //   alert("enter wrong  password")
  // }
  else 
  {
    
    this.userService
      . login( this.email_id, this.password)
      .subscribe(response => {
        
        if (response['status'] == 'success')
         {
         alert("success")
         console.log(response['data'])
         
         sessionStorage['login_status'] = '1'
         localStorage['login_status'] = '1'
         localStorage['customer_name'] = response['data']['customer_name']
         localStorage['user_id'] = response['data']['user_id']
         this.router.navigate(['/app-product'])
         
        } else 
        {
          console.log(response['error'])
          alert("error")
          
        }
      })
  }
}
}
