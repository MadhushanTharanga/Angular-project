import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {AuthService} from "../../../shared/service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';
  constructor(private router : Router, private authService:AuthService) { }

  ngOnInit(): void {
    if (this.authService.isExistsToken('my-token')){
      this.router.navigateByUrl('/console').then();
    }
  }
  login(){
    if(this.email==='m@gmail.com' && this.password ==='1234'){
      this.authService.createToken(this.email);
      this.router.navigateByUrl('/console').then();
    }else {
      alert('worng input')
    }
  }

}
