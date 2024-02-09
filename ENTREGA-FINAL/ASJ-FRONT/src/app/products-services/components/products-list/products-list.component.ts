import {
  Component,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
  inject,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { v4 as uuidv4, v4 } from 'uuid';
import { ProvidersService } from '../../../providers/services/providers.service';
import { ToastServiceEdit } from '../../../shared/components/toast/toast-edit/toast-service';
import { ProviderBack } from '../../../models/ProviderBack';
import { ProductBack } from '../../../models/ProductBack';
import { FilterBySearchPipe } from '../../pipes/filter-by-search.pipe';
import { FilterByStatusPipe } from '../../pipes/filter-by-status.pipe';
import { FilterByNamePipe } from '../../pipes/filter-by-name.pipe';
import { FilterByPricePipe } from '../../pipes/filter-by-price.pipe';
import { CategoryBack } from '../../../models/CategoryBack';
import { AppToastDeleteService } from '../../../shared/components/toast/toast-delete/toast-delete-service';
import { EMPTY, catchError } from 'rxjs';
import { AppToastService } from '../../../shared/components/toast/toast-info/toast-info-service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit, OnDestroy{
  public math = Math;

  @ViewChild('editTpl') editTpl!: TemplateRef<any>;
  @ViewChild('deleteTpl') deleteTpl!: TemplateRef<any>;
  @ViewChild('infoTpl') infoTpl!: TemplateRef<any>;
  @ViewChild('invalidTpl') invalidTpl!: TemplateRef<any>;
  toastDeleteService = inject(AppToastDeleteService);
  toastService = inject(AppToastService);


  

  providers: ProviderBack[] = [];
  categories: CategoryBack[] = [];
  products: ProductBack[] = [];
  productEdit: ProductBack = {
    prodId: 0,
    prodCod: '',
    prodName: '',
    prodPrice: 0,
    prodDescription: '',
    provider: {
      provId: 0,
      provCod: '',
      provCompName: '',
      provWebSite: '',
      provEmail: '',
      provPhone: '',
      item: {
        itemId: 0,
        itemName: '',
      },
      address: {
        adId: 0,
        adStreet: '',
        adNumber: 0,
        adZip: '',
        locality: {
          locId: 0,
          locName: '',
          province: {
            proId: 0,
            proName: '',
            country: {
              conId: 0,
              conName: '',
            },
          },
        },
      },
      provCuit: '',
      ivaCondition: {
        ivaId: 0,
        ivaCond: '',
      },
      provLogo: '',
      infoContact: {
        contId: 0,
        contName: '',
        contPhone: '',
        contEmail: '',
        contRole: '',
      },
      provIsDeleted: false,
    },
    category: {
      catId: 0,
      catName: '',
    },
    images: [{}],
  };
  auxImages:any[]=[]

  infoError:string='';

  idDelete?: number = 0;
  filterCategoryId: any = 0;
  filterSearch: string = '';
  filterStatus: string = '0';
  filterPrice: boolean = false;
  filterName: boolean = true;
  activeFilter: string = '';

  currentPage: number = 1;
  itemsPerPage: number = 5;
  displayedProducts: ProductBack[] = [];
  auxProducts: ProductBack[] = [];

  ngOnInit(): void {
    this.providerServ.getProviders().subscribe((res) => {
      let auxProviders: ProviderBack[] = res;
      this.providers = auxProviders.filter(
        (provider) => provider.provIsDeleted === false
      );
      console.log(this.providers);
    });
    this.productServ.getCategories().subscribe((data) => {
      let auxCategories: CategoryBack[] = data;
      this.categories = auxCategories.filter(
        (cat) => cat.catIsDeleted === false
      );
    });
    this.listProducts();
  }

  ngOnDestroy(): void {
    this.toastServ.clear();
    this.toastDeleteService.clear();
    this.toastService.clear();
  }

  listProducts() {
    this.productServ.getProducts().pipe(
      catchError((error)=>{
        console.log(error) 
        return EMPTY;
      })
    ).subscribe(
      (res) => {
      this.products = res;
      this.applyFilters();
    });
  }

  applyFilters() {
    this.auxProducts = this.products;
    this.auxProducts = this.searchFilter.transform(
      this.auxProducts,
      this.filterSearch
    )!;
    this.auxProducts = this.statusFilter.transform(
      this.auxProducts,
      this.filterStatus
    )!;
    if (this.activeFilter == 'price') {
      this.auxProducts = this.priceFilter.transform(
        this.auxProducts,
        this.filterPrice
      )!;
    } else {
      this.auxProducts = this.nameFilter.transform(
        this.auxProducts,
        this.filterName
      )!;
    }
    this.updatePageData();
  }

  filterByCategory() {
    if (this.filterCategoryId !== '0') {
      this.productServ
        .getProductsByIdCategory(this.filterCategoryId)
        .subscribe((res) => {
          this.products = res;
          this.applyFilters();
        });
    } else {
      this.listProducts();
    }
  }

  orderByPrice() {
    this.activeFilter = 'price';
    this.filterPrice = !this.filterPrice;
    this.applyFilters();
  }

  orderByName() {
    this.activeFilter = 'name';
    this.filterName = !this.filterName;
    this.applyFilters();
  }

  updatePageData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedProducts = this.auxProducts.slice(startIndex, endIndex);
  }

  setPage(pageNumber: number) {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(this.products.length / this.itemsPerPage)
    ) {
      this.currentPage = pageNumber;
      this.updatePageData();
    }
  }

  getPages(): number[] {
    const pageCount = Math.ceil(this.auxProducts.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  checkDelete(id?: number) {
    this.idDelete = id;
  }
  deleteProd() {
    this.productServ.deleteProduct(this.idDelete).subscribe((res) => {
      console.log(res);
      this.showDeleteToast(this.deleteTpl);
      this.listProducts();
    });
  }

  checkActivate(prod: ProductBack) {
    this.productEdit = prod;
  }

  activateProd() {
    this.productEdit.prodIsDeleted = false;
    this.productServ.putProduct(this.productEdit).subscribe((res) => {
      console.log(res);
      this.listProducts();
    });
  }

  editProd(p: ProductBack) {
    this.myFormReactivo.setValue({
      code:p.prodCod,
      name: p.prodName,
      category: p.category.catId,
      provider: p.provider.provId,
      price: p.prodPrice,
      description: p.prodDescription,
      imageP: '',
    });
    if (p.provider.provIsDeleted) {
      this.myFormReactivo.get('provider')?.setValue('');
    }
    this.productEdit.prodId = p.prodId;
    this.productEdit.images = []; 
    this.auxImages=p.images;
  }

  onSubmit() {
    if (this.myFormReactivo.valid) {
      console.log('Formulario válido:', this.myFormReactivo.value);
      this.mapFormValuesToProduct();
      console.log(this.productEdit);
      this.productServ.putProduct(this.productEdit).pipe(
        catchError(error=>{
          console.log(error.exceptionCod);
          this.infoError= error.exceptionCod;
          this.showToastInfo(this.infoTpl);
          return EMPTY
        })
      ).subscribe((res) => {
        console.log(res);
        this.showEditToast(this.editTpl);
        this.listProducts();
        this.myFormReactivo.reset();
      });
    } else {
      this.showToastInfo(this.invalidTpl);
      console.log('form invalido:', this.myFormReactivo.value);
    }
  }

  showEditToast(template: TemplateRef<any>) {
    this.toastServ.show({
      template,
      classname: 'bg-primary text-white',
      delay: 2000,
    });
  }

  showDeleteToast(template: TemplateRef<any>) {
		this.toastDeleteService.show({ template, classname: 'bg-danger text-white', delay: 5000 });
	}

  showToastInfo(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-warning text-white', delay: 5000 });
	}

  myFormReactivo: FormGroup;

  constructor(
    private fb: FormBuilder,
    public providerServ: ProvidersService,
    public productServ: ProductsService,
    public toastServ: ToastServiceEdit,
    private searchFilter: FilterBySearchPipe,
    private statusFilter: FilterByStatusPipe,
    private nameFilter: FilterByNamePipe,
    private priceFilter: FilterByPricePipe
  ) {
    this.myFormReactivo = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      code: ['', [Validators.required, Validators.minLength(4)]],
      category: ['', [Validators.required]],
      provider: ['', [Validators.required]],
      price: [
        null,
        [Validators.required, Validators.max(10000000), Validators.min(1)],
      ],
      description: ['', [Validators.required, Validators.minLength(4) , Validators.maxLength(100)]],
      imageP: [
        '',
        [
          Validators.required,
          Validators.pattern(/^https:\/\/.*\.(png|jpg|jpeg|gif|webp)$/),
        ],
      ],
    });
  }

  mapFormValuesToProduct() {
    this.productEdit.prodCod = this.myFormReactivo.get('code')?.value || '';
    this.productEdit.prodName = this.myFormReactivo.get('name')?.value || '';
    this.productEdit.category.catId =
      this.myFormReactivo.get('category')?.value || '';
    this.productEdit.provider.provId =
      this.myFormReactivo.get('provider')?.value || '';
    this.productEdit.prodPrice = this.myFormReactivo.get('price')?.value || '';
    this.productEdit.prodDescription =
      this.myFormReactivo.get('description')?.value || '';
    this.productEdit.images.push({
      imgId:0,
      imgUrl: this.myFormReactivo.get('imageP')?.value || '',
    });
    console.log(this.productEdit.images)
    this.auxImages.forEach((img,index) => {
      this.productEdit.images[index].imgId=img.imgId;
    });
  }

  addImg() {
    this.productEdit.images.push({
      imgId:0,
      imgUrl: this.myFormReactivo.get('imageP')?.value || '',
    });
    this.myFormReactivo.get('imageP')?.setValue('');
  }
}
