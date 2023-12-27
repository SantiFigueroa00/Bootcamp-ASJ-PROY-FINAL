import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProvidersService } from '../../../providers/services/providers.service';
import { v4 as uuidv4, v4 } from 'uuid';
import { Product } from '../../../models/Product';
import { Provider } from '../../../models/Provider';
import { ProductsService } from '../../services/products.service';
import { ToastServiceSuccess } from '../../../shared/components/toast/toast-success/toast-service';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrl: './products-add.component.css'
})
export class ProductsAddComponent implements OnInit{

  @ViewChild('successTpl') successTpl!: TemplateRef<any>;

  providers: Provider[]=[];
  newProduct: Product={
    id:'',
    name: '',
    category: '',
    provider: '',
    price: 0,
    description: '',
  }
  
  ngOnInit(): void {
    this.providerServ.getProviders().subscribe((res)=>{
      this.providers=res;
    });
  }
  onSubmit() {
    if (this.myFormReactivo.valid) {
      console.log('Formulario válido:', this.myFormReactivo.value);
      this.mapFormValuesToProduct();
      this.productServ.createProduct(this.newProduct).subscribe((res)=>{
        console.log(res);
        this.showSuccessToast(this.successTpl);
      });
      this.myFormReactivo.reset();
    }else{
      console.log('form invalido:', this.myFormReactivo.value);
    }
  }

  showSuccessToast(template : TemplateRef<any>) {
    this.toastServ.show({ template, classname: 'bg-success text-dark', delay: 10000 });
  }

  // REACTIVE FORM
  myFormReactivo: FormGroup;

  constructor(private fb: FormBuilder, public providerServ: ProvidersService, public productServ : ProductsService, public toastServ:ToastServiceSuccess) {
    this.myFormReactivo = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      category: ['', [Validators.required, Validators.maxLength(50)]],
      provider: ['', [Validators.required, Validators.minLength(4)]],
      price: [null, [Validators.required, Validators.max(10000000), Validators.min(1)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
    });
  }

  mapFormValuesToProduct() {
    this.newProduct.id = v4().slice(0,8)
    this.newProduct.name = this.myFormReactivo.get('name')?.value || '';
    this.newProduct.category = this.myFormReactivo.get('category')?.value || '';
    this.newProduct.provider = this.myFormReactivo.get('provider')?.value || '';
    this.newProduct.price = this.myFormReactivo.get('price')?.value || '';
    this.newProduct.description = this.myFormReactivo.get('description')?.value || '';
  }
  
}
