import { ProviderBack } from "./ProviderBack";

export interface OrderBack {
  orderId:number;
  orderCod:string;
  orderDateE:Date;
  orderDateR:Date;
  orderInfo:string; 
  orderTotal:number; 
  orderState:boolean; 
  provider:ProviderBack;
}  
  
