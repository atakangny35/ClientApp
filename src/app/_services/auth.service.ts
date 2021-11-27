import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../model';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL:string='https://localhost:44372/api/user/';
  constructor(private http : HttpClient ) { }
   TokenStorage :string ="token";
  Login(model :Login)
  { 
      //return this.http.post(this.URL+'login',model);
     
      return this.http.post(this.URL+'login',model).pipe
      (
                  
              map(
                    (resp:any) => 
                    
                    {
                      const result =resp;
                        if(result)
                        {

                          localStorage.setItem(this.TokenStorage,result.token);
                        }

                    }


                  )

      )

  }
  LoggedIn()
  {
    const token = localStorage.getItem(this.TokenStorage);
     
    return token ?true:false;
  }
  LogOut()
  {
    localStorage.removeItem(this.TokenStorage);
  }
}
