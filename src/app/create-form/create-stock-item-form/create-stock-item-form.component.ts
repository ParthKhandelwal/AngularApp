import { Component, OnInit, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../shared/api.service';
import { MAT_DIALOG_DATA} from '@angular/material';
import { StockItem, PriceListItem } from '../../Model/stock-item';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material';
import { BilledStockItem } from '../../Model/billed-stock-item';

@Component({
  selector: 'app-create-stock-item-form',
  templateUrl: './create-stock-item-form.component.html',
  styleUrls: ['./create-stock-item-form.component.css']
})
export class CreateStockItemFormComponent implements OnInit {

godowns: string[] = [];
ledgers: string[] = [];
item: StockItem = new StockItem();
priceListItem: PriceListItem = {
  godownName: "",
  price: 0
}

@ViewChild(MatTable, {static: false}) table: MatTable<PriceListItem>;
dataSource: MatTableDataSource<PriceListItem>;
displayedColumns = [ 'godownName', 'price','update'];

  constructor( @Inject(MAT_DIALOG_DATA) public data?: any, private router? :Router, @Inject(ApiService) private apiService? : ApiService) {
    if (data != null){
      console.log(data);
      this.item = data;

    }
  }

  ngOnInit() {

    this.apiService.getGodownNames().subscribe(
      res =>{
        this.godowns = res.list;

      },
      err =>{
        console.log(err);
      }
    );

    this.apiService.getSalesLedger().subscribe(
      res =>{
        this.ledgers = res.list;

      },
      err =>{
        console.log(err);
      }
    )

    this.dataSource = new MatTableDataSource<PriceListItem>(this.item.priceList);


  }

  ngAfterViewInit() {

    this.table.dataSource = this.dataSource;
  }

  submit(){
    this.apiService.saveStockItem(this.item).subscribe(
      res => {console.log("stockItem saved")},
      err => {console.log("stockItem could not be saved")}
    )
  }

  addPriceListItem(){
    this.item.priceList.push(this.priceListItem)
    this.table.renderRows();
    this.priceListItem = {
      godownName: "",
      price: 0
    };

  }

}
