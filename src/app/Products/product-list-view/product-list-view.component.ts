import { Component, OnInit, Inject, ViewChild } from '@angular/core';

import { ApiService } from '../../shared/api.service';
import { StockItemTableComponent } from '../../tables/stock-item-table/stock-item-table.component';
import { StockItem } from '../../Model/stock-item';

@Component({
  selector: 'app-product-list-view',
  templateUrl: './product-list-view.component.html',
  styleUrls: ['./product-list-view.component.css']
})
export class ProductListViewComponent implements OnInit {

  @ViewChild(StockItemTableComponent, {static: false}) table: StockItemTableComponent;
  stockItems: StockItem[] = [];


  constructor(private apiService?: ApiService) {

  }

  ngOnInit() {
      this.getAllStockItems();
      //this.table.renderRows();
      console.log("customers component called")
  }

  public getAllStockItems(): void{
    this.apiService.getAllStockItems().subscribe(
      res =>{
        var item;
        for(let item of res){
      this.stockItems.push(item);
    }
    this.table.renderRows();
    },
    err =>{
      alert("An error has ocurred while sending your request");
    }
  );
  }

}
