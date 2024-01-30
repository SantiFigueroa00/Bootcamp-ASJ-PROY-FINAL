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
    images:[
        productImage:{
            imgId?:number;
            imgUrl?:string;
            product?:ProductBack;
        }
    ];

}
