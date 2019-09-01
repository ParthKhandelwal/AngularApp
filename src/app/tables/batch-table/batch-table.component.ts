import { AfterViewInit, Input, Component, OnInit, ViewChild, Inject, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material';
import { ApiService } from '../../shared/api.service';
import { Batch } from '../../Model/batch';
import { filter } from 'rxjs/operators';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import {CreateCustomerFormComponent} from '../../create-form/create-customer-form/create-customer-form.component';
import { ConfirmationBoxComponent } from '../../confirmation-box/confirmation-box.component';
import { Customer } from '../../Model/customer';

@Component({
  selector: 'app-batch-table',
  templateUrl: './batch-table.component.html',
  styleUrls: ['./batch-table.component.css']
})
export class BatchTableComponent implements OnInit {
  periods : Period[] = [{name: "1 month", value:30},
                        {name: "3 month", value:90},
                      {name: "6 month", value:180},
                    {name: "1 year", value:365},];

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Batch>;
  dataSource: MatTableDataSource<Batch>;
  batches: Batch[];
  selectedValue: Number = 90;


  displayedColumns = [ 'batchName', 'name', 'expiryDate', 'closingBalance'];


  constructor(private apiService: ApiService, private dialog?: MatDialog, private dialogConfig?: MatDialogConfig) { }

  ngOnInit(){
    this.getBatches(this.selectedValue);
    this.table.renderRows();
  this.dataSource = new MatTableDataSource<Batch>(this.batches);
  console.log("Batch table componenet called");
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

 public getBatches(daysRemaining: Number): void{
   this.apiService.getNearExpiryBatches(daysRemaining).subscribe(
     res =>{
     this.batches = res;
     this.dataSource = new MatTableDataSource<Batch>(this.batches);
     this.dataSource.sort = this.sort;
     this.dataSource.paginator = this.paginator;
     this.table.dataSource = this.dataSource;
     //this.table.renderRows();
     //console.log(this.customers.length);
   },
   err =>{
     alert("An error has ocurred while sending your request");
   }
 );
 }

}

export interface Period{
  name: string;
  value: number;
}
