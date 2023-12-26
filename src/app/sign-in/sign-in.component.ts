import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { response } from 'express';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})

export class SignInComponent {
  loginStatus: any = sessionStorage.getItem("loginStatus");

  constructor(private service: UserServiceService, private router: Router) { }

  signIN(userEmail: any, userPassword: any) {
    this.service.signIN(userEmail, userPassword).subscribe(response => {
      console.log(response);
      alert('Login Successful');
      sessionStorage.setItem("loginStatus", "active");
      sessionStorage.setItem("userId", response.userId);
      sessionStorage.setItem("userRole", response.userRole);
      this.goTo();

    },
      () => { alert('Wrong Email-ID or Password!'); });
  }

  signUP() {
    this.router.navigate(['signup']);
  }

  goTo() {
    this.router.navigate(['see-all-laptops']);
  }

}
