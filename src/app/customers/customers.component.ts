import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Customer } from '../Model/customer';
import { ApiService } from '../shared/api.service';
import { CustomerTableComponent } from '../tables/customer-table/customer-table.component';
import { NavItem } from '../side-navigation-bar/side-navigation-bar.component';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  items: NavItem[] = [
    {title: "Customers", link: 'customerListView', icon: 'list'},
    {title: "Addresses", link: 'addressListView', icon: 'list'}

  ]


  constructor(private apiService?: ApiService) {

  }

  ngOnInit() {

  }



}
