import { Component, OnInit, Inject } from '@angular/core';
import {User} from '../Model/user';
import { ApiService } from '../shared/api.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  user: string;

  constructor(@Inject(ApiService) private apiService? : ApiService, private cookie?: CookieService) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  logout(): void{
    this.cookie.delete("token");
  }

  getCurrentUser(): void{
    this.apiService.getCurrentUser().subscribe(
      res =>{
        this.user= res.username;
      },
      err =>{
        console.log(err);
      }
    );

  }

}
