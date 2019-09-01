import { Component, OnInit, Inject, Input } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { TaxDetails } from '../../Model/tax-details';
import { Address } from '../../Model/address';
import { ApiService } from '../../shared/api.service';
import { MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-create-tax-details-form',
  templateUrl: './create-tax-details-form.component.html',
  styleUrls: ['./create-tax-details-form.component.css']
})
export class CreateTaxDetailsFormComponent implements OnInit {

taxDetail: TaxDetails = new TaxDetails();

  constructor(@Inject(MAT_DIALOG_DATA) public data?: TaxDetails, private router? :Router, @Inject(ApiService) private apiService? : ApiService) {
    if (data != null){
      this.taxDetail = data;
    }
  }

  ngOnInit() {
  }

  submit(): void{
    this.apiService.addTaxDetail(this.taxDetail).subscribe(
      res =>{
        console.log(res);
      },
      err =>{
        console.log(this.taxDetail);
        console.log(err);
      }
    );
  }


}
