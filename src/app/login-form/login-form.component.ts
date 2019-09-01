import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  user: UserLogin = {
    username: '',
    password: ''
  };
  constructor(private apiService?: ApiService, private router?:Router, private cookie?: CookieService) { }

  ngOnInit() {
  }

  validate(): void{
    let url= 'http://localhost:3838/authenticate';
    this.apiService.authenticate(this.user).subscribe(
      res =>{
        this.cookie.set("token", res.token);
        this.cookie.set("currentUser", this.user.username);
        this.router.navigateByUrl('/home');
      },
      err =>{
        alert("An error has ocurred while sending your request");
      }
    );
  }

}

export interface UserLogin{
  username: string;
  password: string;
}
export interface Response{
  token: string;
}
