import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProviderBack } from '../../../models/ProviderBack';
import { ProvidersService } from '../../services/providers.service';
import { v4 as uuidv4, v4 } from 'uuid';
import { Toast, ToastServiceSuccess } from '../../../shared/components/toast/toast-success/toast-service';
import { AppToastService } from '../../../shared/components/toast/toast-info/toast-info-service';
import { EMPTY, catchError } from 'rxjs';

@Component({
  selector: 'app-providers-add',
  templateUrl: './providers-add.component.html',
  styleUrl: './providers-add.component.css',
})
export class ProvidersAddComponent  implements OnInit, OnDestroy{
  @ViewChild('successTpl') successTpl!: TemplateRef<any>;
  @ViewChild('infoTpl') infoTpl!: TemplateRef<any>;
  @ViewChild('invalidTpl') invalidTpl!: TemplateRef<any>;
  toastService = inject(AppToastService);

  newProvider: ProviderBack={
    provCod:'',
    provCompName:'',
    provWebSite:'',
    provEmail:'',
    provPhone:'',
    item:{
        itemId:0,
    },
    address:{
        adStreet:'',
        adNumber:0,
        adZip:'',
        locality:{
            locName:'',
            province:{
                proId:0,
                country:{
                    conId:0,
                }
            }
        }
    },
    provCuit:'',
    ivaCondition:{
        ivaId:0,
    },
    provLogo:'',
    infoContact:{
        contName:'',
        contPhone:'',
        contEmail:'',
        contRole:''
    },
    provIsDeleted:false
  };

  countries: any[]=[];
  provinces: any[]=[];
  items: any[]=[];
  ivaConditions: any[]=[];
  idCountrySelected: number=0;
  infoError: string='';

  ngOnInit(): void {
    this.providerServ.getItems().subscribe(data =>{
      this.items= data;
    });
    this.providerServ.getCountries().subscribe((data)=>{
      this.countries = data;
    });
    this.providerServ.getIvaConditions().subscribe((data)=>{
      this.ivaConditions = data;
    });
  }

  ngOnDestroy(): void {
    this.toastServ.clear();
    this.toastService.clear();
  }

  selectedCount() {
    this.idCountrySelected = this.myFormReactivo.get('country')?.value || '';
    this.providerServ.getProvincesByCountry(this.idCountrySelected).subscribe((data)=>{
      this.provinces=data;
    });

}

  onSubmit() {
    if (this.myFormReactivo.valid) {
      console.log('Formulario válido:', this.myFormReactivo.value);
      this.mapFormValuesToProvider();
      console.log(this.newProvider);
      this.providerServ.createProvider(this.newProvider).pipe(
        catchError(error=>{
          this.infoError= error.exceptionCod;
          this.showToastInfo(this.infoTpl);
          return EMPTY
        })
      ).subscribe((res)=>{
        console.log(res);
        this.showSuccessToast(this.successTpl);
        this.myFormReactivo.get('item')?.setValue('');
        this.myFormReactivo.get('ivaCondition')?.setValue('');
        this.myFormReactivo.get('country')?.setValue('');
        this.myFormReactivo.get('province')?.setValue('');
        this.myFormReactivo.reset();
      });
    }else{
      this.showToastInfo(this.invalidTpl);
      console.log('form invalido:', this.myFormReactivo.value);
    }
  }

  showSuccessToast(template : TemplateRef<any>) {
    this.toastServ.show({ template, classname: 'bg-success text-dark', delay: 10000 });
  }

  showToastInfo(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-warning text-white', delay: 5000 });
	}

  // REACTIVE FORM
  myFormReactivo: FormGroup;

  constructor(private fb: FormBuilder, private providerServ: ProvidersService, public toastServ:ToastServiceSuccess) {
    this.myFormReactivo = this.fb.group({
      logo: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^https:\/\/.*\.(png|jpg|jpeg|gif|webp)$/)]],
      compName: ['', [Validators.required, Validators.minLength(4)]],
      code: ['', [Validators.required, Validators.minLength(4)]],
      item: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      web: ['', [Validators.required, Validators.pattern(/^(http|https):\/\/[^ "]+$/)]],
      phone: ['', [Validators.required, Validators.maxLength(15)]],
      street: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      number: [null, [Validators.required, Validators.max(10000),, Validators.min(1)]],
      zip: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{4,5}$/)]],
      country: ['', [Validators.required]],
      province: ['', [Validators.required]],
      locality: ['', [Validators.required , Validators.maxLength(50)]],
      cuit: ['', [Validators.required, Validators.pattern(/^\d{2}-\d{8}-\d{1}$/)]],
      ivaCondition: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      emailProv: ['', [Validators.required, Validators.email]],
      telProv: ['', [Validators.required, Validators.maxLength(15)]],
      role: ['', [Validators.required, Validators.maxLength(30)]],
    });
  }

  mapFormValuesToProvider() {
    this.newProvider.provCod = this.myFormReactivo.get('code')?.value || '';
    this.newProvider.provCompName = this.myFormReactivo.get('compName')?.value || '';
    this.newProvider.item.itemId = this.myFormReactivo.get('item')?.value || '';
    this.newProvider.provWebSite = this.myFormReactivo.get('web')?.value || '';
    this.newProvider.provPhone = this.myFormReactivo.get('phone')?.value || '';
    this.newProvider.provEmail = this.myFormReactivo.get('email')?.value || '';
    this.newProvider.address.adStreet = this.myFormReactivo.get('street')?.value || '';
    this.newProvider.address.adNumber = this.myFormReactivo.get('number')?.value || 0;
    this.newProvider.address.adZip = this.myFormReactivo.get('zip')?.value || '';
    this.newProvider.address.locality.province.country.conId = this.myFormReactivo.get('country')?.value || '';
    this.newProvider.address.locality.province.proId = this.myFormReactivo.get('province')?.value || '';
    this.newProvider.address.locality.locName = this.myFormReactivo.get('locality')?.value || '';
    this.newProvider.provCuit = this.myFormReactivo.get('cuit')?.value || '';
    this.newProvider.ivaCondition.ivaId= this.myFormReactivo.get('ivaCondition')?.value || '';
    this.newProvider.infoContact.contName = this.myFormReactivo.get('name')?.value || '';
    this.newProvider.infoContact.contPhone = this.myFormReactivo.get('telProv')?.value || '';
    this.newProvider.infoContact.contEmail = this.myFormReactivo.get('emailProv')?.value || '';
    this.newProvider.infoContact.contRole = this.myFormReactivo.get('role')?.value || '';
    this.newProvider.provLogo = this.myFormReactivo.get('logo')?.value || '';
    this.newProvider.provIsDeleted = false;
  }
  

}
