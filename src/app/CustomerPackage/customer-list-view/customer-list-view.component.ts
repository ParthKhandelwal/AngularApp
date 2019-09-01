import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Customer } from '../../Model/customer';
import { ApiService } from '../../shared/api.service';
import { CustomerTableComponent } from '../../tables/customer-table/customer-table.component';

@Component({
  selector: 'app-customer-list-view',
  templateUrl: './customer-list-view.component.html',
  styleUrls: ['./customer-list-view.component.css']
})
export class CustomerListViewComponent implements OnInit {
  @ViewChild(CustomerTableComponent, { static: false }) table: CustomerTableComponent;
  customers: Customer[];

  constructor(private apiService?: ApiService) {

  }

  ngOnInit() {
    this.getAllCustomers();
    console.log("customers component called")
  }

  public getAllCustomers(): void {
    this.apiService.getCustomers().subscribe(
      res => {
        this.customers = res;
        this.table.renderRows();
        console.log(this.customers.length);
      },
      err => {
        alert("An error has ocurred while sending your request");
      }
    );
  }
}
