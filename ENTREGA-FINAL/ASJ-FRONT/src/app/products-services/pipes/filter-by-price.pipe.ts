import { Pipe, PipeTransform } from '@angular/core';
import { ProductBack } from '../../models/ProductBack';

@Pipe({
  name: 'filterByPrice'
})
export class FilterByPricePipe implements PipeTransform {

  transform(products: ProductBack[] | null, filterPrice: boolean): ProductBack[] | null {
    if (!products) {
      return products;
    }

    if(filterPrice) {
      products = products.sort((a:ProductBack, b:ProductBack) => {
        const p1 = a.prodPrice!; 
        const p2 = b.prodPrice!;
  
        if (p1 < p2) {
          return -1;
        }
        if (p1 > p2) {
          return 1;
        }
        return 0;
      });
    }else{
      products = products.sort((a:ProductBack, b:ProductBack) => {
        const p1 = a.prodPrice!; 
        const p2 = b.prodPrice!;
  
        if (p1 > p2) {
          return -1;
        }
        if (p1 < p2) {
          return 1;
        }
        return 0;
      });
    }
    

    return products;
  }
}
