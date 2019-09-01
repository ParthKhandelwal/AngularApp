import {Batch} from 'batch';
export class StockItem {
  name: string;
  parent: string;
  category: string;
  description: string;
  baseUnits: string;
  closingBalance: number;
  lastSalePrice: number;
  thisYearBalance : number;
  prevYearBalance;
  hsnCode: string;
  gstovrdnnature: string;
  ledger: string;
  priceList: PriceListItem[];
  batchList: Batch[];

}

export interface PriceListItem{
  godownName: string;
  price: number;
}
