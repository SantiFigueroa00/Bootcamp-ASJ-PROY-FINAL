import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProvidersService } from '../../../providers/services/providers.service';
import { v4 as uuidv4, v4 } from 'uuid';
import { Product } from '../../../models/Product';
import { Provider } from '../../../models/Provider';
import { ProductsService } from '../../services/products.service';
import { ToastServiceSuccess } from '../../../shared/components/toast/toast-success/toast-service';
import { ProviderBack } from '../../../models/ProviderBack';
import { ProductBack } from '../../../models/ProductBack';
import { Router } from '@angular/router';
import { CategoryBack } from '../../../models/CategoryBack';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrl: './products-add.component.css'
})
export class ProductsAddComponent implements OnInit{


  @ViewChild('successTpl') successTpl!: TemplateRef<any>;

  providers: ProviderBack[]=[];
  categories:any[] = [];
  newProduct: ProductBack={
    prodId:0,
    prodCod:'',
    prodName:'',
    prodPrice:0,
    prodDescription:'', 
    provider:{
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
    },
    category:{
        catId:0,
        catName:'',
    },
    images:[]
  };
  images: any[]=[];
  
  ngOnInit(): void {
    this.providerServ.getProviders().subscribe((res)=>{
      let auxProviders:ProviderBack[] = res;
      this.providers = auxProviders.filter(provider => provider.provIsDeleted === false);
    });
    this.productServ.getCategories().subscribe(data=>{
      let auxCategories:CategoryBack[] = data;
      this.categories = auxCategories.filter(cat => cat.catIsDeleted === false);
    });
  }
  onSubmit() {
    if (this.myFormReactivo.valid) {
      console.log('Formulario válido:', this.myFormReactivo.value);
      this.mapFormValuesToProduct();
      console.log(this.newProduct);
      this.productServ.createProduct(this.newProduct).subscribe((res)=>{
        this.showSuccessToast(this.successTpl);
        this.myFormReactivo.get('category')?.setValue('');
        this.myFormReactivo.get('provider')?.setValue('');
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

  constructor(private fb: FormBuilder, public providerServ: ProvidersService, public productServ : ProductsService, public toastServ:ToastServiceSuccess, private router :Router) {
    this.myFormReactivo = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      code: ['', [Validators.required, Validators.minLength(4)]],
      category: ['', [Validators.required]],
      provider: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.max(10000000), Validators.min(1)]],
      description: ['', [Validators.required, Validators.minLength(4) , Validators.maxLength(100)]],
      imageP: ['', [Validators.required, Validators.pattern(/^https:\/\/.*\.(png|jpg|jpeg|gif|webp)$/)]],
    });
  }

  mapFormValuesToProduct() {
    this.newProduct.prodCod = this.myFormReactivo.get('code')?.value || '';
    this.newProduct.prodName = this.myFormReactivo.get('name')?.value || '';
    this.newProduct.category.catId = this.myFormReactivo.get('category')?.value || '';
    this.newProduct.provider.provId = this.myFormReactivo.get('provider')?.value || '';
    this.newProduct.prodPrice = this.myFormReactivo.get('price')?.value || '';
    this.newProduct.prodDescription = this.myFormReactivo.get('description')?.value || '';
    this.newProduct.prodIsDeleted = false;
    this.newProduct.images.push({
      imgUrl:this.myFormReactivo.get('imageP')?.value || '',
    })
  }

  addImg() {
    this.newProduct.images.push({
      imgUrl:this.myFormReactivo.get('imageP')?.value || '',
    })
    this.myFormReactivo.get('imageP')?.setValue('');
  }
  
  onSelectChange(event: any) {
    const selectedValue = event.target.value;
    if (selectedValue === 'external-link') {
      this.router.navigate(['categories', 'add']);
    }
  }
}
