import { Component, OnInit } from '@angular/core';
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
  constructor(private authService :AuthService) { }

  ngOnInit(): void {
  }
  login()
  { 
    this.authService.Login(this.model).subscribe(next =>{
      
      
      
    },error=> {console.log("başarısız");})

    
   //this.authService.Login(this.model).subscribe(res=>{console.log("başarılı");})
  }
  loggedIn()
  {
    return this.authService.LoggedIn();
    
  }
  logOut()
  {
    this.authService.LogOut();

  }
}
