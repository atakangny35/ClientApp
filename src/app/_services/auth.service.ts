import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Register } from '../model';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL:string='https://localhost:44372/api/user/';
  Helper = new JwtHelperService();
  decodedToken :any;
  constructor(private http : HttpClient ) { }
   TokenStorage :string ="token";
  Login(model :Login)
  { 
      //return this.http.post(this.URL+'login',model);
     
      return this.http.post(this.URL+'login',model).pipe
      (
                  
              map(
                    (resp:any) => 
                    
                    { console.log(resp);
                      const result =resp;
                        if(result)
                        {

                          localStorage.setItem(this.TokenStorage,result.token);
                          this.decodedToken=this.Helper.decodeToken(result.token);
                          console.log(result);
                        }
                        
                    }


                  )

      )

  }
  LoggedIn()
  {
    const token = localStorage.getItem(this.TokenStorage) as string;//null olmaz
    /*
      if(token)
      {
        return !this.Helper.isTokenExpired(token);
      }
    */
      return !this.Helper.isTokenExpired(token);
  }
  LogOut()
  {
    localStorage.removeItem(this.TokenStorage);
  }
  Register(model :Register)
  {

   return this.http.post(this.URL+"register",model);
  }
}
