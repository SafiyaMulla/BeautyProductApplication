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
        console.log(response['data'])
        if (response['status'] == 'success')
         {
         alert("success")
         this.router.navigate(['/products-list'])
         
        } else 
        {
          console.log(response['error'])
          alert("error")
          
        }
      })
  }
}
}
