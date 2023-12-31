import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Product } from '../../../models/Product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { v4 as uuidv4, v4 } from 'uuid';
import { Provider } from '../../../models/Provider';
import { ProvidersService } from '../../../providers/services/providers.service';
import { ToastServiceEdit } from '../../../shared/components/toast/toast-edit/toast-service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  @ViewChild('editTpl') editTpl!: TemplateRef<any>;

  providers: Provider[]=[];
  products: Product[]=[];
  productEdit: Product={
    id:'',
    name: '',
    category: '',
    provider: '',
    price: 0,
    description: '',
    imageP:''
  }
  
  idDelete?:string='';
  ngOnInit(): void {
    this.providerServ.getProviders().subscribe((res)=>{
      let auxProviders:Provider[] = res;
      this.providers = auxProviders.filter(provider => provider.isDeleted === false);
    });
    this.listProducts();
  }
  
  setCompName(id:string){
    const provider = this.providers.find((prov) => prov.id === id);
    return provider ? provider.compName : '';
  }


  listProducts(){
    this.productServ.getProducts().subscribe((res)=>{
      let auxProviders:Product[] = res.sort((a:Product, b:Product) => {
        const nameA = a.name.toUpperCase(); // convertir a mayúsculas para ordenar de manera no sensible a mayúsculas/minúsculas
        const nameB = b.name.toUpperCase();
  
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      this.products = auxProviders.filter(prod => this.providers.map(provider => provider.id).includes(prod.provider));
    });
  }
  
  checkDelete(id?:string){
    this.idDelete=id;
  }
  deleteProd() {
    this.productServ.deleteProduct(this.idDelete).subscribe((res)=>{
      console.log(res);
      this.listProducts();
    });
  }
  
  editProd(p: Product) {
    this.myFormReactivo.setValue({
      name: p.name,
      category: p.category,
      provider: p.provider,
      price: p.price,
      description: p.description,
      imageP: p.imageP
    });
    this.productEdit=p;
  }
  
  onSubmit() {
    if (this.myFormReactivo.valid) {
      console.log('Formulario válido:', this.myFormReactivo.value);
      this.mapFormValuesToProduct();
      this.productServ.putProduct(this.productEdit).subscribe((res)=>{
        console.log(res);
        this.showEditToast(this.editTpl);
      });
      this.myFormReactivo.reset();
    
    }else{
      console.log('form invalido:', this.myFormReactivo.value);
    }
  }

  showEditToast(template : TemplateRef<any>) {
    this.toastServ.show({ template, classname: 'bg-primary text-white', delay: 2000 });
  }
  
  mapFormValuesToProduct() {
    this.productEdit.name = this.myFormReactivo.get('name')?.value || '';
    this.productEdit.category = this.myFormReactivo.get('category')?.value || '';
    this.productEdit.provider = this.myFormReactivo.get('provider')?.value || '';
    this.productEdit.price = this.myFormReactivo.get('price')?.value || '';
    this.productEdit.description = this.myFormReactivo.get('description')?.value || '';
    this.productEdit.imageP = this.myFormReactivo.get('imageP')?.value || '';
  }

  myFormReactivo: FormGroup;

  constructor(private fb: FormBuilder, private productServ: ProductsService, public providerServ : ProvidersService,public toastServ:ToastServiceEdit) {
    this.myFormReactivo = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      category: ['', [Validators.required, Validators.maxLength(50)]],
      provider: ['', [Validators.required, Validators.minLength(4)]],
      price: [null, [Validators.required, Validators.max(10000000), Validators.min(1)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      imageP: ['', [Validators.required, Validators.pattern(/^https:\/\/.*\.(png|jpg|jpeg|gif|webp)$/)]]
    });
  }
}
