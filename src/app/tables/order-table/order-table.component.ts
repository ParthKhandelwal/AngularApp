import { AfterViewInit, Input, Component, OnInit, ViewChild, Inject, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material';
import { ApiService } from '../../shared/api.service';
import { Order } from '../../Model/order';
import { filter } from 'rxjs/operators';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import { ConfirmationBoxComponent } from '../../confirmation-box/confirmation-box.component';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Order>;
  dataSource: MatTableDataSource<Order>;
  @Input('orders') orders: Order[];

  displayedColumns = ['_id', 'dateOfCreation', 'customerId', 'update'];


  constructor(private apiService: ApiService, private dialog?: MatDialog, private dialogConfig?: MatDialogConfig) { }

  ngOnInit(){
  this.dataSource = new MatTableDataSource<Order>(this.orders);
  console.log("customers table componenet called");
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  renderRows(){
    this.table.renderRows();
  }

  applyFilter(filterValue: string) {
   this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
