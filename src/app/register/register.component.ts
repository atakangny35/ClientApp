import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Register } from '../model';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model :any={};
  constructor(private authService : AuthService) { }
  isSucces !:boolean;
  errors !:any[];
  ngOnInit(): void {
  }
  clean(){
    this.model={};
  }

  Register()
  {
   this.authService.Register(this.model).subscribe( x=>
    {
     console.log(this.model);
     this.isSucces=true;
     this.clean();

    },
   error=>{this.errors=error.error;this.isSucces=false;});
  }
}
