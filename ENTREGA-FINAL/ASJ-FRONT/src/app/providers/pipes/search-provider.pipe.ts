import { Pipe, PipeTransform } from '@angular/core';
import { ProviderBack } from '../../models/ProviderBack';

@Pipe({
  name: 'searchProvider'
})
export class SearchProviderPipe implements PipeTransform {

  transform(providers: ProviderBack[] | null, searchText: string): ProviderBack[] | null {
    if (!providers || !searchText) {
      return providers;
    }

    searchText = searchText.toLowerCase();

    return providers.filter(provider => provider.provCompName!.toLowerCase().includes(searchText) || provider.provCod!.toLowerCase().includes(searchText));
  }

}
