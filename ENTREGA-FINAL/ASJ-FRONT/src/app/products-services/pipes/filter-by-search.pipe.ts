import { Pipe, PipeTransform } from '@angular/core';
import { ProductBack } from '../../models/ProductBack';

@Pipe({
  name: 'filterBySearch'
})
export class FilterBySearchPipe implements PipeTransform {

  transform(products: ProductBack[] | null, searchText: string): ProductBack[] | null {
    if (!products || !searchText) {
      return products;
    }

    searchText = searchText.toLowerCase();

    return products.filter(product => product.prodName!.toLowerCase().includes(searchText) || product.prodDescription!.toLowerCase().includes(searchText));
  }
}
