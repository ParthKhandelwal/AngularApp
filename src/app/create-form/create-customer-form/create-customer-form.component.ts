import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { Customer } from '../../Model/customer';
import { Address } from '../../Model/address';
import { ApiService } from '../../shared/api.service';
import { MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-create-customer-form',
  templateUrl: './create-customer-form.component.html',
  styleUrls: ['./create-customer-form.component.css']
})
export class CreateCustomerFormComponent implements OnInit {

  addresses: Address[] = [];
  customer : Customer = {
    _id: '',
    name:'',
    fatherName:'',
    phoneNumber:'',
    addressId:'',
    landHolding:0
  };
  constructor( @Inject(MAT_DIALOG_DATA) public data?: Customer, private router? :Router, @Inject(ApiService) private apiService? : ApiService) {
    if (data != null){
      this.customer = data;
    }
   }

  ngOnInit() {
    this.apiService.getAddresses().subscribe(
      res => {
        this.addresses = res;
      },
      err=>{
        console.log("Cannot fetch customer at this moment");
      }
    )
  }

  submit(): void{

    this.apiService.addCustomer(this.customer).subscribe(
      res =>{
        alert(res);
      },
      err =>{
        console.log(this.customer);
        console.log(err);
      }
    );
  }

  fillCustomer(customer): void{
    this.customer = customer;
  }

  displayFn(user?: Customer): string | undefined {
      return user ? user.name : undefined;
  }
}
