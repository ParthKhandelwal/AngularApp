import { NgModule } from '@angular/core';
import {DashboardComponent} from './dashboard/dashboard.component'
import {LoginFormComponent} from './login-form/login-form.component'
import {NotFoundComponent} from './not-found/not-found.component'
import { CustomersComponent } from './customers/customers.component';
import { CustomerListViewComponent } from './CustomerPackage/customer-list-view/customer-list-view.component';
import { AddressTableComponent } from './tables/address-table/address-table.component';
import { OrdersComponent } from './orders/orders.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { SalesComponent } from './sales/sales.component';
import { StockItemsComponent } from './stock-items/stock-items.component';
import { ExpiredProductsComponent } from './Products/expired-products/expired-products.component';
import { UsersComponent } from './users/users.component';
import { CreateCustomerFormComponent } from './create-form/create-customer-form/create-customer-form.component';
import { CreateComplaintFormComponent } from './create-form/create-complaint-form/create-complaint-form.component';
import { CreateOrderFormComponent } from './create-form/create-order-form/create-order-form.component';
import { CreateUserFormComponent } from './create-form/create-user-form/create-user-form.component'
import { Routes, RouterModule } from '@angular/router';
import { CreateVoucherComponent } from './create-form/create-voucher/create-voucher.component'
import { DayBookComponent } from './AccountingPackage/day-book/day-book.component';
import { ProductListViewComponent } from './Products/product-list-view/product-list-view.component';
import { TaxDetailsTableComponent } from './tables/tax-details-table/tax-details-table.component';


const routes: Routes = [
  {
    path: "home",
    component: DashboardComponent
  },
  {
    path: "customers",
    component: CustomersComponent,
    children: [
      {path: 'customerListView', component: CustomerListViewComponent},
      {path: 'addressListView', component: AddressTableComponent}
    ]

  },
  {
    path: "orders",
    component: OrdersComponent
  },
  {
    path: "complaints",
    component: ComplaintsComponent
  },
  {
    path: "expired-products",
    component: ExpiredProductsComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "products",
    component: StockItemsComponent,
    children: [
      {path: 'product-list', component: ProductListViewComponent},
      {path: 'expired-batches', component: ExpiredProductsComponent},
      {path: 'tax-details', component: TaxDetailsTableComponent}
    ]
  },
  {
    path: "sales",
    component: SalesComponent,
    children: [
      {path: 'create-sales-voucher', component: CreateVoucherComponent},
      {path: 'day-book', component: DayBookComponent}
    ]
  },
  {
    path: "create-customer",
    component: CreateCustomerFormComponent
  },
  {
    path: "create-order",
    component: CreateOrderFormComponent
  },
  {
    path: "create-user",
    component: CreateUserFormComponent
  },
  {
    path: "create-complaint",
    component: CreateComplaintFormComponent
  },
  {
    path: "",
    component: LoginFormComponent
  },
  {
    path: "customer/{id}",
    component: LoginFormComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
