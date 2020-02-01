import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserService
{
    url='http://localhost:4000/customer'
    constructor(private http:HttpClient){}
    login(email_id:string,password:string)
    {
          const body={
           
              email_id:email_id,
              password:password
           
          }
          return this.http.post(this.url+'/login',body)
    }
    registerUser(user_name:string,email_id: string,password:string,mobile_no:string)
    {
        const body={
            user_name:user_name,
            email_id:email_id,
            password:password,
            mobile_no:mobile_no
        }
          return this.http.post(this.url+'/register',body)
          
    }

    }
