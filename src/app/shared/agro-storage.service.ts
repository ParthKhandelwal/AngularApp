import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';
import { TallyVoucher } from '../Model/tally-voucher';



@Injectable({
  providedIn: 'root'
})



export class AgroStorageService {
  vouchers: TallyVoucher[] = []
  VOUCHER_LIST_KEY = "vouchers";

  constructor(@Inject(LOCAL_STORAGE) private localStorage: StorageService, @Inject(SESSION_STORAGE) private sessionStorage: StorageService) { }

  public storeVoucherLocally(tallyVoucher: TallyVoucher){
    const currentVoucherList = this.localStorage.get(this.VOUCHER_LIST_KEY) || [];
          // push new task to array
          currentVoucherList.push(tallyVoucher);
          // insert updated array to local storage
          this.localStorage.set(this.VOUCHER_LIST_KEY, currentVoucherList);
  }

  public syncVouchers(){
    
  }
}
