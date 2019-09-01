import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { StockItem } from '../../Model/stock-item';
import { ApiService } from '../../shared/api.service';
import { MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  stockitem: StockItem;

  constructor(@Inject(MAT_DIALOG_DATA) public data?: StockItem,
                                        private router? :Router,
                                        @Inject(ApiService) private apiService? : ApiService) {
                                           if (data != null){
                                          this.stockitem = data;
                                        }
                                      }

  ngOnInit() {
  }

}
