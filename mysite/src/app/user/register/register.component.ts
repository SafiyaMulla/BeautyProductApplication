import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

 export class RegisterComponent implements OnInit
{

  user_name=''
 email_id=''
 password=''
 confim_password=''

 mobile_no=' '
 constructor(
  private router: Router,
  private userService: UserService) { }

ngOnInit() { }

onregisterUser() {
  if (this.user_name.length == 0) {
   alert("enter valid user name")
  } else if (this.email_id.length == 0) {
    alert("enter valid user email id")
    
  } else if (this.password.length == 0) {
    alert("enter valid password")
  }
  // else if (this.password != this.confim_password) {
  //   alert("enter wrong  password")
  // }
  
  else if (this.mobile_no.length == 0) {
    alert("enter valid mobile no")
  } else 
  {
    
    this.userService
      .registerUser(this.user_name, this.email_id, this.password,this.mobile_no)
      .subscribe(response => {
        console.log()
        if (response['status'] == 'success')
         {
          
         alert("success")

          this.router.navigate(['/user-login'])
        } else 
        {
          console.log(response['error'])
          alert("error")
          
        }
      })
  }
}
}
