import { AfterViewInit, Input, Component, OnInit, ViewChild, Inject, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material';
import { ApiService } from '../../shared/api.service';
import { Address } from '../../Model/address';
import { filter } from 'rxjs/operators';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA} from '@angular/material';
import {CreateAddressFormComponent} from '../../create-form/create-address-form/create-address-form.component';
import { ConfirmationBoxComponent } from '../../confirmation-box/confirmation-box.component';

@Component({
  selector: 'app-address-table',
  templateUrl: './address-table.component.html',
  styleUrls: ['./address-table.component.css']
})
export class AddressTableComponent implements OnInit {

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<Address>;
  dataSource: MatTableDataSource<Address>;
  addresses: Address[] = [];


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['name', 'districtName', 'tehsilName','stateName', 'areaOfPrivateLand', 'update'];

constructor(private apiService: ApiService, private dialog?: MatDialog, private dialogConfig?: MatDialogConfig){

}

  ngOnInit() {
    this.apiService.getAllAddresses().subscribe(
      res => {
        this.addresses = res;
        this.dataSource = new MatTableDataSource<Address>(this.addresses);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      },
      err => {
        alert("Could not connect to the server. Please try again later.");
      }
    );


    //this.dataSource.data = this.customers;//this.getAllCustomers();
  }

  ngAfterViewInit() {

  }

  renderRows(){
    this.table.renderRows();
  }

  applyFilter(filterValue: string) {
   this.dataSource.filter = filterValue.trim().toLowerCase();
 }

 viewCustomer(){

 }



 updateAddress(data){
   const dialogConfig = new MatDialogConfig();
   dialogConfig.autoFocus = true;
   dialogConfig.width = "50%";
   this.dialog.open(CreateAddressFormComponent, {data});
 }



 createCustomer(){
   const dialogConfig = new MatDialogConfig();
   dialogConfig.autoFocus = true;
   dialogConfig.width = "50%";
   this.dialog.open(CreateAddressFormComponent);

 }


}
