import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { NavItem } from '../side-navigation-bar/side-navigation-bar.component';

import { ApiService } from '../shared/api.service';



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  items: NavItem[] = [
    {title: "Day Book", link: 'day-book', icon: 'book'},
    {title: "Voucher", link: 'create-sales-voucher', icon: 'add'}
  ];

  constructor(private apiService?: ApiService) { }

  ngOnInit() {

  }



}
