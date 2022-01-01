import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../_services/auth.service";
@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate{
    constructor(private authServive : AuthService,private router : Router){}
    canActivate()

    {   if(this.authServive.LoggedIn())
        {
            return true;
        }
        console.log("activate");
        this.router.navigate(['/home']);
        return false;
    }
}