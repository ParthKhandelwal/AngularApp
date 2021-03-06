import { Component, OnInit, Inject } from '@angular/core';
import { Customer } from '../../Model/customer';
import { MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {
customer: Customer = {
  _id: "",
  name: "",
  fatherName: "",
  landHolding: 0,
  addressId: "",
  phoneNumber: ""
}

  constructor(@Inject(MAT_DIALOG_DATA) public customerInjected: Customer) {

   }

  ngOnInit() {
  }

}
