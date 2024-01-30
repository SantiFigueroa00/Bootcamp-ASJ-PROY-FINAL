import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ProvidersService } from '../../services/providers.service';
import { Provider } from '../../../models/Provider';
import { ProviderBack } from '../../../models/ProviderBack';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastServiceEdit } from '../../../shared/components/toast/toast-edit/toast-service';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrl: './providers-list.component.css'
})
export class ProvidersListComponent implements OnInit{

  @ViewChild('editTpl') editTpl!: TemplateRef<any>;
  
  providers: ProviderBack[]=[];
  providerEdit: ProviderBack={
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
  providerDel: ProviderBack={
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

  countries: any[]=[];
  provinces: any[]=[];
  items: any[]=[];
  ivaConditions: any[]=[];
  countrySelected?: string=''
  idCountrySelected: number | undefined;

  ngOnInit(): void {
    this.listProviders();
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

  selectedCount() {
    this.idCountrySelected = this.myFormReactivo.get('country')?.value || '';
    this.providerServ.getProvincesByCountry(this.idCountrySelected).subscribe((data)=>{
      this.provinces=data;
    });
}

  
  listProviders(){
    this.providerServ.getProviders().subscribe((res)=>{
      let auxProviders:ProviderBack[] = res;
      this.providers = auxProviders.filter(provider => provider.provIsDeleted === false);
    });
  }
  
  checkDelete(providerDel:ProviderBack){
    providerDel.provIsDeleted = true;
    this.providerDel=providerDel;
  }
  deleteProv() {
    this.providerServ.deleteProvider(this.providerDel.provId).subscribe((res)=>{
      console.log(res);
      this.listProviders();
    });
  }
  
  editProv(p: ProviderBack) {
    this.idCountrySelected = p.address.locality.province.country.conId;
    this.providerServ.getProvincesByCountry(this.idCountrySelected).subscribe((data)=>{
      this.provinces=data;
    });
    this.myFormReactivo.setValue({
      logo: p.provLogo,
      compName: p.provCompName,
      item: p.item.itemId,
      email: p.provEmail,
      web: p.provWebSite,
      phone: p.provPhone,
      street: p.address.adStreet,
      number: p.address.adNumber,
      zip: p.address.adZip,
      country: p.address.locality.province.country.conId,
      province: p.address.locality.province.proId,
      locality: p.address.locality.locName,
      cuit: p.provCuit,
      ivaCondition: p.ivaCondition.ivaId,
      name: p.infoContact.contName,
      telProv: p.infoContact.contPhone,
      emailProv: p.infoContact.contEmail,
      role: p.infoContact.contRole,
    });
    this.providerEdit=p;
  }
  
  onSubmit() {
    if (this.myFormReactivo.valid) {
      console.log('Formulario válido:', this.myFormReactivo.value);
      this.mapFormValuesToProvider();
      console.log(this.providerEdit);
      this.providerServ.putProvider(this.providerEdit).subscribe((res)=>{
        console.log(res);
        this.showEditToast(this.editTpl);
        this.listProviders();
      });
      this.myFormReactivo.reset();
    }else{
      console.log('form invalido:', this.myFormReactivo.value);
    }
  }

  showEditToast(template : TemplateRef<any>) {
    this.toastServ.show({ template, classname: 'bg-primary text-white', delay: 10000 });
  }
  
  myFormReactivo: FormGroup;

  constructor(private fb: FormBuilder, private providerServ: ProvidersService, public toastServ:ToastServiceEdit) {
    this.myFormReactivo = this.fb.group({
      logo: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^https:\/\/.*\.(png|jpg|jpeg|gif|webp)$/)]],
      compName: ['', [Validators.required, Validators.minLength(4)]],
      item: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      web: ['', [Validators.required, Validators.pattern(/^(http|https):\/\/[^ "]+$/)]],
      phone: ['', [Validators.required, Validators.maxLength(15)]],
      street: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      number: [null, [Validators.required, Validators.max(10000),, Validators.min(1)]],
      zip: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{4,5}$/)]],
      country: ['', [Validators.required, Validators.maxLength(50)]],
      province: ['', [Validators.required]],
      locality: ['', [Validators.required, Validators.maxLength(50)]],
      cuit: ['', [Validators.required, Validators.pattern(/^\d{2}-\d{8}-\d{1}$/)]],
      ivaCondition: ['', [Validators.required, Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      emailProv: ['', [Validators.required, Validators.email]],
      telProv: ['', [Validators.required, Validators.maxLength(15)]],
      role: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }

  mapFormValuesToProvider() {
    this.providerEdit.provCompName = this.myFormReactivo.get('compName')?.value || '';
    this.providerEdit.item.itemId = this.myFormReactivo.get('item')?.value || '';
    this.providerEdit.provWebSite = this.myFormReactivo.get('web')?.value || '';
    this.providerEdit.provPhone = this.myFormReactivo.get('phone')?.value || '';
    this.providerEdit.provEmail = this.myFormReactivo.get('email')?.value || '';
    this.providerEdit.address.adStreet = this.myFormReactivo.get('street')?.value || '';
    this.providerEdit.address.adNumber = this.myFormReactivo.get('number')?.value || 0;
    this.providerEdit.address.adZip = this.myFormReactivo.get('zip')?.value || '';
    this.providerEdit.address.locality.province.country.conId = this.myFormReactivo.get('country')?.value || '';
    this.providerEdit.address.locality.province.proId = this.myFormReactivo.get('province')?.value || '';
    this.providerEdit.address.locality.locName = this.myFormReactivo.get('locality')?.value || '';
    this.providerEdit.provCuit = this.myFormReactivo.get('cuit')?.value || '';
    this.providerEdit.ivaCondition.ivaId= this.myFormReactivo.get('ivaCondition')?.value || '';
    this.providerEdit.infoContact.contName = this.myFormReactivo.get('name')?.value || '';
    this.providerEdit.infoContact.contPhone = this.myFormReactivo.get('telProv')?.value || '';
    this.providerEdit.infoContact.contEmail = this.myFormReactivo.get('emailProv')?.value || '';
    this.providerEdit.infoContact.contRole = this.myFormReactivo.get('role')?.value || '';
    this.providerEdit.provLogo = this.myFormReactivo.get('logo')?.value || '';
    this.providerEdit.provIsDeleted = false;
  }
  
}
