import { Pipe, PipeTransform } from '@angular/core';
import { ProductBack } from '../../models/ProductBack';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(products: ProductBack[] | null, filterPrice: boolean): ProductBack[] | null {
    if (!products) {
      return products;
    }

    if(filterPrice) {
      products = products.sort((a:ProductBack, b:ProductBack) => {
        const nameA = a.prodName.toUpperCase(); // convertir a mayúsculas para ordenar de manera no sensible a mayúsculas/minúsculas
        const nameB = b.prodName.toUpperCase();
  
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    }else{
      products = products.sort((a:ProductBack, b:ProductBack) => {
        const nameA = a.prodName.toUpperCase(); // convertir a mayúsculas para ordenar de manera no sensible a mayúsculas/minúsculas
        const nameB = b.prodName.toUpperCase();
  
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      });
    }
    

    return products;
  }

}
