import { ProviderBack } from "./ProviderBack";

export interface ProductBack {
    prodId?:number;
    prodCod?:string;
    prodName:string;
    prodPrice?:number;
    prodDescription?:string; 
    provider:ProviderBack;
    category:{
        catId?:number;
        catName?:string;
    };
    images:ProductImage[];
    prodIsDeleted?:boolean; 
}

export interface ProductImage{
    imgId?:number;
    imgUrl?:string;
    product?:ProductBack;
}
