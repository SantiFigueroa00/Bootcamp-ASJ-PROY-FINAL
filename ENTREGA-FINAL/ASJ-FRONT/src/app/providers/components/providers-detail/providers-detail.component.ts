import { Component } from '@angular/core';
import { ProvidersService } from '../../services/providers.service';
import { ActivatedRoute } from '@angular/router';
import { ProviderBack } from '../../../models/ProviderBack';

@Component({
  selector: 'app-providers-detail',
  templateUrl: './providers-detail.component.html',
  styleUrl: './providers-detail.component.css'
})
export class ProvidersDetailComponent {
  providerId: string='';
  provider:ProviderBack={
    provId:0,
    provCod:'',
    provCompName:'',
    provWebSite:'',
    provEmail:'',
    provPhone:'',
    item:{
        itemId:0,
        itemName:''
    },
    address:{
        adId:0,
        adStreet:'',
        adNumber:0,
        adZip:'',
        locality:{
            locId:0,
            locName:'',
            province:{
                proId:0,
                proName:'',
                country:{
                    conId:0,
                    conName:''
                }
            }
        }
    },
    provCuit:'',
    ivaCondition:{
        ivaId:0,
        ivaCond:'',
    },
    provLogo:'',
    infoContact:{
        contId:0,
        contName:'',
        contPhone:'',
        contEmail:'',
        contRole:''
    },
    provIsDeleted:false
}

  constructor( public providerServ : ProvidersService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    try {
      const idParam = this.route.snapshot.paramMap.get('id');

      if (idParam === null) {
        throw new Error("El parámetro 'id' es nulo");
      }

      this.providerId = idParam;
      this.providerServ.getProviderById(this.providerId).subscribe((res) => {
        this.provider = res;
      });
    } catch (error: any) {
      // Manejo de la excepción
      console.error(error.message);
    }
  }
}

