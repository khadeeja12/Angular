import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username='kaija'
  password='123'
  errorMessage='invalid credentials'
  invalidLogin=false

  constructor(private router:Router, private hardcodedAuthenticationservice : HardcodedAuthenticationService){} //Depedendecy injection.// here this router is the member variable

  handleLogin()
  {
      
    // console.log(this.username); 
    // console.log(this.password); //when we refer to member variable we should use this.
    // if(this.username==='kaija' && this.password==='123')
      if(this.hardcodedAuthenticationservice.authenticate(this.username,this.password))
      {
        //Redirect to welcome page
        this.router.navigate(['welcome',this.username]);
        this.invalidLogin =false
      }
      else
      {
        this.invalidLogin =true
      }
  }
}
