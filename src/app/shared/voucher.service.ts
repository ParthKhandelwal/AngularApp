import { Injectable } from '@angular/core';
import { TallyVoucher } from '../Model/tally-voucher';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class VoucherService {

  tallyVoucher: TallyVoucher;
  vouchers : TallyVoucher[] = [];

  constructor(private apiService?:ApiService) {
    this.initializeWebSocketConnection();
   }
  private serverUrl = this.apiService.WEB_SOCKET_URL + '/voucherSocket';
  private title = 'WebSockets chat';
  private stompClient;



  initializeWebSocketConnection(){
      let ws = new SockJS(this.serverUrl);
      this.stompClient = Stomp.over(ws);
      let that = this;
      this.stompClient.connect({}, function(frame) {
        that.stompClient.subscribe("/voucherSocket", (message) => {
          console.log(that.vouchers);
          if(message.body) {
            that.vouchers.push(JSON.parse(message.body));
            console.log(message.body);
          }
        });
      });
    }

    sendVoucher(voucher){
      console.log(JSON.stringify(voucher));
    this.stompClient.send("/app/voucher/save" , {}, JSON.stringify(voucher));
    }

}
