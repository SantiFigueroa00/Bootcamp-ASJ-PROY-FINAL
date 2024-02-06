import { Pipe, PipeTransform } from '@angular/core';
import { ProviderBack } from '../../models/ProviderBack';

@Pipe({
  name: 'filterOrder'
})
export class FilterOrderPipe implements PipeTransform {

  transform(value: ProviderBack[], filter: string): ProviderBack[] | null {
    if (!value || !filter) {
      return value;
    }

    switch (filter) {
      case 'codASC':
        return value.slice().sort((a, b) => a.provCod!.localeCompare(b.provCod!));
      case 'codDESC':
        return value.slice().sort((a, b) => b.provCod!.localeCompare(a.provCod!));
      case 'nameASC':
        return value.slice().sort((a, b) => a.provCompName!.localeCompare(b.provCompName!));
      case 'nameDESC':
        return value.slice().sort((a, b) => b.provCompName!.localeCompare(a.provCompName!));
      case 'counASC':
        return value.slice().sort((a, b) => {
          const countryCompare = a.address.locality.province.country.conName!.localeCompare(b.address.locality.province.country.conName!);
          if (countryCompare == 0) {
            return a.address.locality.province.proName!.localeCompare(b.address.locality.province.proName!);
          }
          return countryCompare;
        });
      case 'counDESC':
        return value.slice().sort((a, b) => {
          const countryCompare = b.address.locality.province.country.conName!.localeCompare(a.address.locality.province.country.conName!);
          if (countryCompare == 0) {
            return a.address.locality.province.proName!.localeCompare(b.address.locality.province.proName!);
          }
          return countryCompare;
        });
      default:
        return value;
    }
  }

}
