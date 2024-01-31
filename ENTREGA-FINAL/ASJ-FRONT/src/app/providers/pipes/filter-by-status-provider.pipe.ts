import { Pipe, PipeTransform } from '@angular/core';
import { ProviderBack } from '../../models/ProviderBack';

@Pipe({
  name: 'filterByStatusProvider'
})
export class FilterByStatusProviderPipe implements PipeTransform {

  transform(providers: ProviderBack[] | null, filterOption: string): ProviderBack[] | null {
    if (!providers || !filterOption) {
      return providers;
    }

    switch (filterOption) {
      case '1':
        return providers.filter(provider => !provider.provIsDeleted);
      case '2':
        return providers.filter(provider => provider.provIsDeleted);
      default:
        return providers;
    }
  }
}
