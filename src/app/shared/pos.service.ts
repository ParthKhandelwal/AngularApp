import { Injectable } from '@angular/core';
import { NgxIndexedDB } from 'ngx-indexed-db';
import { TallyVoucher } from '../Model/tally-voucher';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class PosService {

  db = new NgxIndexedDB('agrostop', 1);
  posModeEnabled: boolean = false;
  products: any[];
  cacheVouchers: TallyVoucher

  constructor(private apiService?: ApiService) {
    this.db.openDatabase(1, evt => {
    let objectStore = evt.currentTarget.result.createObjectStore('cacheVoucher', { keyPath: 'customVoucherDetails.voucherNumber', autoIncrement: false });

    //objectStore.createIndex('name', 'name', { unique: false });
    //objectStore.createIndex('email', 'email', { unique: true });
});
   }

  enablePOSMode(){
    if (!this.posModeEnabled){
      this.posModeEnabled = true;
    }
  }

  addCacheVoucher(voucher: TallyVoucher): Promise<any>{
    return this.db.add('cacheVoucher', voucher);
  }

countCacheVoucher(): number{
  this.db.count('cacheVoucher').then(
    voucherCount => {
    return voucherCount;
    },
    error => {
      console.log(error);
    }
  );
  return 0;
}

  getAllCacheVouchers(): Promise<any>{
    return this.db.getAll('cacheVoucher');
  }

  syncAllCacheVouchers(){
    this.db.getAll('cacheVoucher').then(
      vouchers => {
        for (let voucher of vouchers){
          this.apiService.saveTallyVoucher(voucher).subscribe(
            res => {
              console.log('Voucher saved Successfully');
              this.db.delete('cacheVoucher', voucher.customVoucherDetails.voucherNumber).then(
                  () => {
                    // Do something after delete
                  },
                  error => {
                    console.log(error);
                  }
                );
            },
            err => {
              console.log('Voucher could not be saved');
            }
          );

        }
      },
      err =>{
        alert ("Error ocurred")
      }
    );
  }

}
