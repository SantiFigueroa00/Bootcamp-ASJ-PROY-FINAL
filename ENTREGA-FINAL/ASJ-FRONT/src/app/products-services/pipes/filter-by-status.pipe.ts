import { Pipe, PipeTransform } from '@angular/core';
import { ProductBack } from '../../models/ProductBack';

@Pipe({
  name: 'filterByStatus'
})
export class FilterByStatusPipe implements PipeTransform {

  transform(products: ProductBack[] | null, filterOption: string): ProductBack[] | null {
    if (!products || !filterOption) {
      return products;
    }

    switch (filterOption) {
      case '1':
        return products.filter(products => !products.prodIsDeleted);
      case '2':
        return products.filter(products => products.prodIsDeleted);
      default:
        return products;
    }
  }
}
