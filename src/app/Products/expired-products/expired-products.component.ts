import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { Batch } from '../../Model/batch';
import { ApiService } from '../../shared/api.service';
import { BatchTableComponent } from '../../tables/batch-table/batch-table.component';

@Component({
  selector: 'app-expired-products',
  templateUrl: './expired-products.component.html',
  styleUrls: ['./expired-products.component.css']
})
export class ExpiredProductsComponent implements OnInit {

  @ViewChild(BatchTableComponent, {static: false}) table: BatchTableComponent;
  batches;


  constructor(private apiService?: ApiService) {

  }

  ngOnInit() {


  }



}
