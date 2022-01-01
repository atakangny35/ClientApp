import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  model :any = {};
  Login !:Login;
  Username!:string;
  constructor(public authService :AuthService, private router : Router) { }

  ngOnInit(): void {
  }
  login()
  { 
    this.authService.Login(this.model).subscribe(next =>{
       // this.Username= this.authService.decodedToken.unique_name;
       
      this.router.navigate(['/members']);
      
    },error=> {console.log(error);})

    
   //this.authService.Login(this.model).subscribe(res=>{console.log("başarılı");})
  }
  loggedIn()
  {
    return this.authService.LoggedIn();
    
  }
  logOut()
  {
    this.authService.LogOut();
    this.router.navigate(['/home']);

  }
}
