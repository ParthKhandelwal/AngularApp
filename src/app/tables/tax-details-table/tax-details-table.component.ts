import { AfterViewInit, Input, Component, OnInit, ViewChild, Inject, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material';
import { ApiService } from '../../shared/api.service';
import { TaxDetails } from '../../Model/tax-details';
import { filter } from 'rxjs/operators';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import {CreateCustomerFormComponent} from '../../create-form/create-customer-form/create-customer-form.component';
import { ConfirmationBoxComponent } from '../../confirmation-box/confirmation-box.component';
import { CreateTaxDetailsFormComponent } from '../../create-form/create-tax-details-form/create-tax-details-form.component';


@Component({
  selector: 'app-tax-details-table',
  templateUrl: './tax-details-table.component.html',
  styleUrls: ['./tax-details-table.component.css']
})
export class TaxDetailsTableComponent implements OnInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<TaxDetails>;
  dataSource: MatTableDataSource<TaxDetails>;
  taxDetails: TaxDetails[];


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['hsnCode', 'cgst', 'sgst', 'update'];

constructor(private apiService: ApiService, private dialog?: MatDialog, private dialogConfig?: MatDialogConfig){

}

  ngOnInit() {
    this.apiService.getTaxDetails().subscribe(
      res => {
        this.taxDetails = res;
        this.dataSource = new MatTableDataSource<TaxDetails>(this.taxDetails);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
        this.table.renderRows();
      },
      err => {
        alert("Could not get Tax Details. Try again later");
      },
    );

    console.log("customers table componenet called");
    //this.dataSource.data = this.customers;//this.getAllCustomers();
  }

  ngAfterViewInit() {

  }

  renderRows(){
    this.dataSource = new MatTableDataSource<TaxDetails>(this.taxDetails);
    this.table.renderRows();
  }

  applyFilter(filterValue: string) {
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }

 viewCustomer(){

 }



 updateTaxDetail(data){
   const dialogConfig = new MatDialogConfig();
   dialogConfig.autoFocus = true;
   dialogConfig.width = "50%";
   this.dialog.open(CreateTaxDetailsFormComponent, {data});
 }

 deleteTaxDetail(data){
   const dialogRef = this.dialog.open(ConfirmationBoxComponent, {
      width: '350px',
      data: "Do you confirm the deletion of this customer: " + data.name + " ?"
    });
dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.apiService.deleteTaxDetails(data).subscribe(
          res =>{
            alert("Customer deleted successfully");
          },
          err =>{
            console.log(err);
          }
        );
        // DO SOMETHING
      }
    });
  }


 createTaxDetail() {
   const dialogConfig = new MatDialogConfig();
   dialogConfig.autoFocus = true;
   dialogConfig.width = "50%";
   this.dialog.open(CreateTaxDetailsFormComponent);

 }


}
