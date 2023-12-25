import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../services/providers.service';
import { Provider } from '../../../models/Provider';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-providers-list',
  templateUrl: './providers-list.component.html',
  styleUrl: './providers-list.component.css'
})
export class ProvidersListComponent implements OnInit{


  
  providers: Provider[]=[];
  providerEdit: Provider={
    id:'',
    compName:'',
    item:'',
    webSite:'',
    phone:'',
    email:'',
    address:{
      street:'',
      number:0,
      zip:'',
      country:'',
      province:'',
      locality:''
    },
    taxData:{
      cuit:'',
      iva:''
    },
    logo:'',
    contact:{
      name:'',
      phone:'',
      email:'',
      role:''
    }
  }
  
  idDelete?:string='';
  ngOnInit(): void {
    this.listProviders();
  }
  
  listProviders(){
    this.providerServ.getProviders().subscribe((res)=>{
      this.providers = res;
    });
  }
  
  checkDelete(id?:string){
    this.idDelete=id;
  }
  deleteProv() {
    this.providerServ.deleteProvider(this.idDelete).subscribe((res)=>{
      console.log(res);
      this.listProviders();
    });
  }
  
  editProv(p: Provider) {
    this.myFormReactivo.setValue({
      logo: p.logo,
      compName: p.compName,
      item: p.item,
      email: p.email,
      web: p.webSite,
      phone: p.phone,
      street: p.address.street,
      number: p.address.number,
      zip: p.address.zip,
      country: p.address.country,
      province: p.address.province,
      locality: p.address.locality,
      cuit: p.taxData.cuit,
      ivaCondition: p.taxData.iva,
      name: p.contact.name,
      telProv: p.contact.phone,
      emailProv: p.contact.email,
      role: p.contact.role,
    });
    this.providerEdit=p;
  }
  
  onSubmit() {
    if (this.myFormReactivo.valid) {
      console.log('Formulario válido:', this.myFormReactivo.value);
      this.mapFormValuesToProvider();
      this.providerServ.putProvider(this.providerEdit).subscribe((res)=>{
        console.log(res);
      });
      this.myFormReactivo.reset();
    
    }else{
      console.log('form invalido:', this.myFormReactivo.value);
    }
  }
  
  mapFormValuesToProvider() {
    this.providerEdit.compName = this.myFormReactivo.get('compName')?.value || '';
    this.providerEdit.item = this.myFormReactivo.get('item')?.value || '';
    this.providerEdit.webSite = this.myFormReactivo.get('web')?.value || '';
    this.providerEdit.phone = this.myFormReactivo.get('phone')?.value || '';
    this.providerEdit.email = this.myFormReactivo.get('email')?.value || '';
    this.providerEdit.address.street = this.myFormReactivo.get('street')?.value || '';
    this.providerEdit.address.number = this.myFormReactivo.get('number')?.value || 0;
    this.providerEdit.address.zip = this.myFormReactivo.get('zip')?.value || '';
    this.providerEdit.address.country = this.myFormReactivo.get('country')?.value || '';
    this.providerEdit.address.province = this.myFormReactivo.get('province')?.value || '';
    this.providerEdit.address.locality = this.myFormReactivo.get('locality')?.value || '';
    this.providerEdit.taxData.cuit = this.myFormReactivo.get('cuit')?.value || '';
    this.providerEdit.taxData.iva = this.myFormReactivo.get('ivaCondition')?.value || '';
    this.providerEdit.contact.name = this.myFormReactivo.get('name')?.value || '';
    this.providerEdit.contact.phone = this.myFormReactivo.get('telProv')?.value || '';
    this.providerEdit.contact.email = this.myFormReactivo.get('emailProv')?.value || '';
    this.providerEdit.contact.role = this.myFormReactivo.get('role')?.value || '';
  }

  myFormReactivo: FormGroup;

  constructor(private fb: FormBuilder, private providerServ: ProvidersService) {
    this.myFormReactivo = this.fb.group({
      logo: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/^https:\/\/.*\.(png|jpg|jpeg|gif|webp)$/)]],
      compName: ['', [Validators.required, Validators.minLength(4)]],
      item: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      web: ['', [Validators.required, Validators.pattern(/^(http|https):\/\/[^ "]+$/)]],
      phone: ['', [Validators.required, Validators.maxLength(15)]],
      street: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      number: [null, [Validators.required, Validators.max(10000),, Validators.min(1)]],
      zip: ['', [Validators.required, Validators.pattern(/^\d{1,5}$/)]],
      country: ['', [Validators.required, Validators.maxLength(50)]],
      province: ['', [Validators.required, Validators.maxLength(50)]],
      locality: ['', [Validators.required, Validators.maxLength(50)]],
      cuit: ['', [Validators.required, Validators.pattern(/^\d{2}-\d{8}-\d{1}$/)]],
      ivaCondition: ['', [Validators.required, Validators.maxLength(50)]],
      name: ['', [Validators.required, Validators.maxLength(50)]],
      emailProv: ['', [Validators.required, Validators.email]],
      telProv: ['', [Validators.required, Validators.maxLength(15)]],
      role: ['', [Validators.required, Validators.maxLength(50)]],
    });
  }
}
