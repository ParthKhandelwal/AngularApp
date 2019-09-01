import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Customer } from '../Model/customer';
import { ApiService } from '../shared/api.service';
import { StockItemTableComponent } from '../tables/stock-item-table/stock-item-table.component';
import { NavItem } from '../side-navigation-bar/side-navigation-bar.component';

@Component({
  selector: 'app-stock-items',
  templateUrl: './stock-items.component.html',
  styleUrls: ['./stock-items.component.css']
})

export class StockItemsComponent implements OnInit {

  items : NavItem[]= [
    {title:"Products", icon:"list", link: 'product-list'},
    {title:"Expired Batches", icon:"list", link: 'expired-batches'},
    {title:"Tax Details", icon:"list", link: 'tax-details'}

  ];


  constructor(private apiService?: ApiService) {

  }

  ngOnInit() {

  }



}
