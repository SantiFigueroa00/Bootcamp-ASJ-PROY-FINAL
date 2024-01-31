import { ProductBack } from "./ProductBack";
import { ProviderBack } from "./ProviderBack";

export interface OrderBack {
  orderId:number;
  orderCod:string;
  orderDateE:String;
  orderDateR:String;
  orderInfo:string; 
  orderTotal:number; 
  orderState:boolean; 
  provider:ProviderBack;
  details:DetailOrderBack[];
}  

export interface DetailOrderBack {
  detailId?:number;
  detailQuantity:number;
  detailPriceProd:number;
  detailSubtotal:number;
  product:ProductBack;
}  

