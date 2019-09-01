export interface BilledStockItem {
  batches: any[],
  name: string,
  batch: any,
  quantity: number,
  rate: number,
  cgst: number,
  sgst: number,
  amount: number,
  godownName: string,
  hsnCode: string
}
