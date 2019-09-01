import { Address } from './address';
export interface Customer {

    _id: string ;
    name: string;
    fatherName: string ;
    addressId: string;
    phoneNumber: string;
    landHolding: number;
    fullAddress?: Address;

}
