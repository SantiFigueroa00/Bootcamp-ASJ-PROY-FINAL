import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Product } from '../../../models/Product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { v4 as uuidv4, v4 } from 'uuid';
import { Provider } from '../../../models/Provider';
import { ProvidersService } from '../../../providers/services/providers.service';
import { ToastServiceEdit } from '../../../shared/components/toast/toast-edit/toast-service';
import { ProviderBack } from '../../../models/ProviderBack';
import { ProductBack } from '../../../models/ProductBack';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {

  @ViewChild('editTpl') editTpl!: TemplateRef<any>;

  providers: ProviderBack[]=[];
  categories:any[] = [];
  products: ProductBack[]=[];
  productEdit: ProductBack={
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
    images:[{}]
  };
  
  idDelete?:number=0;
  filterCategoryId: any=0;
  filterSearch: string='';
  filterStatus: string='0';
  ngOnInit(): void {
    this.providerServ.getProviders().subscribe((res)=>{
      this.providers = res;
    });
    this.productServ.getCategories().subscribe(data=>{
      this.categories=data;
    });
    this.listProducts();
  }
  
  setCompName(id:number){
    const provider = this.providers.find((prov) => prov.provId === id);
    return provider ? provider.provCompName : '';
  }


  listProducts(){
    this.productServ.getProducts().subscribe((res)=>{
      this.products = res.sort((a:ProductBack, b:ProductBack) => {
        const nameA = a.prodName.toUpperCase(); // convertir a mayúsculas para ordenar de manera no sensible a mayúsculas/minúsculas
        const nameB = b.prodName.toUpperCase();
  
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    });
  }

  filterByCategory() {
    if (this.filterCategoryId !== '0') {
        this.productServ.getProductsByIdCategory(this.filterCategoryId).subscribe(res => {
            this.products = res;
        });
    }else{
      this.listProducts();
    }
}

  
  checkDelete(id?:number){
    this.idDelete=id;
  }
  deleteProd() {
    this.productServ.deleteProduct(this.idDelete).subscribe((res)=>{
      console.log(res);
      this.listProducts();
    });
  }

  checkActivate(prod:ProductBack){
    this.productEdit=prod;
  }

  activateProd(){
    this.productEdit.prodIsDeleted=false;
    this.productServ.putProduct(this.productEdit).subscribe((res)=>{
      console.log(res);
      this.listProducts();
    });
  }


  
  editProd(p: ProductBack) {
    this.myFormReactivo.setValue({
      name: p.prodName,
      category: p.category.catId,
      provider: p.provider.provId,
      price: p.prodPrice,
      description: p.prodDescription,
      imageP: ''
    });
    this.productEdit=p;
  }
  
  onSubmit() {
    if (this.myFormReactivo.valid) {
      console.log('Formulario válido:', this.myFormReactivo.value);
      this.mapFormValuesToProduct();
      console.log(this.productEdit);
      this.productServ.putProduct(this.productEdit).subscribe((res)=>{
        console.log(res);
        this.showEditToast(this.editTpl);
        this.listProducts();
      });
      this.myFormReactivo.reset();
    
    }else{
      console.log('form invalido:', this.myFormReactivo.value);
    }
  }

  showEditToast(template : TemplateRef<any>) {
    this.toastServ.show({ template, classname: 'bg-primary text-white', delay: 2000 });
  }
  
  myFormReactivo: FormGroup;

  constructor(private fb: FormBuilder, public providerServ: ProvidersService, public productServ : ProductsService, public toastServ:ToastServiceEdit) {
    this.myFormReactivo = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      category: ['', [Validators.required]],
      provider: ['', [Validators.required]],
      price: [null, [Validators.required, Validators.max(10000000), Validators.min(1)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      imageP: ['', [Validators.required, Validators.pattern(/^https:\/\/.*\.(png|jpg|jpeg|gif|webp)$/)]],
    });
  }

  mapFormValuesToProduct() {
    this.productEdit.prodCod = v4().slice(0,8)
    this.productEdit.prodName = this.myFormReactivo.get('name')?.value || '';
    this.productEdit.category.catId = this.myFormReactivo.get('category')?.value || '';
    this.productEdit.provider.provId = this.myFormReactivo.get('provider')?.value || '';
    this.productEdit.prodPrice = this.myFormReactivo.get('price')?.value || '';
    this.productEdit.prodDescription = this.myFormReactivo.get('description')?.value || '';
    this.productEdit.images[0].imgUrl= this.myFormReactivo.get('imageP')?.value || '';
    console.log(this.productEdit);
  }

  
}
