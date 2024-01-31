import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ProvidersService } from '../../../providers/services/providers.service';
import { v4 as uuidv4, v4 } from 'uuid';
import { Product } from '../../../models/Product';
import { Provider } from '../../../models/Provider';
import { ProductsService } from '../../../products-services/services/products.service';
import { Order } from '../../../models/Order';
import { OrdersService } from '../../services/orders.service';
import { ToastServiceSuccess } from '../../../shared/components/toast/toast-success/toast-service';
import { DetailOrderBack, OrderBack } from '../../../models/OrderBack';
import { ProviderBack } from '../../../models/ProviderBack';
import { ProductBack } from '../../../models/ProductBack';

@Component({
  selector: 'app-orders-add',
  templateUrl: './orders-add.component.html',
  styleUrl: './orders-add.component.css',
})
export class OrdersAddComponent implements OnInit {
  @ViewChild('successTpl') successTpl!: TemplateRef<any>;


  providers: ProviderBack[] = [];
  products: ProductBack[] = [];
  total: number = 0;
  providerIdSelect: number = 0;
  newOrder: OrderBack={
    orderId:0,
    orderCod:'',
    orderDateE:'',
    orderDateR:'',
    orderInfo:'', 
    orderTotal:0, 
    orderState:false, 
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
    details:[]
  };
  flag:boolean=false;
  idProdEdit?:number=0;
  idProdDelete?:number=0;
  
  // REACTIVE FORM
  myFormReactivoProd: FormGroup;
  myFormReactivoOrd: FormGroup;

  constructor(
    private fb: FormBuilder,
    public providerServ: ProvidersService,
    public productServ: ProductsService,
    public orderServ: OrdersService,
    public toastServ:ToastServiceSuccess
    ) {
      
      const currentDate = new Date();
      const formattedDate = this.formatDate(currentDate);
      this.myFormReactivoOrd = this.fb.group({
        provider: ['', [Validators.required]],
        address: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(100),
          ],
        ],
        dateE: [{ value: formattedDate, disabled: true }, [Validators.required]],
        dateR: ['', [Validators.required,this.dateValidator]],
      });
      this.myFormReactivoProd = this.fb.group({
        product: ['', [Validators.required]],
        quantity: [
          '',
          [Validators.required, Validators.max(1000), Validators.min(1)],
        ],
      });
    }

    ngOnInit(): void {
      this.providerServ.getProviders().subscribe((res) => {
        let auxProviders:ProviderBack[] = res;
        this.providers = auxProviders.filter(provider => provider.provIsDeleted === false);
      });
    }
    
    onSubmitOrd() {
      if (this.myFormReactivoOrd.valid) {
        console.log('Formulario válido:', this.myFormReactivoOrd.value);
        console.log(this.newOrder)
        if(this.newOrder.details.length > 0){
          this.mapFormValuesToOrder();
          console.log(this.newOrder)
          this.orderServ.createOrder(this.newOrder).subscribe((res)=>{
            console.log(res);
            this.showSuccessToast(this.successTpl);
            this.myFormReactivoOrd.reset();
            this.newOrder.details = [];
            this.total=0;
          });
        }else{
          alert('Debe seleccionar al menos un producto');
        }
      } else {
        console.log('form invalido:', this.myFormReactivoOrd.value);
      }
    }

    showSuccessToast(template : TemplateRef<any>) {
      this.toastServ.show({ template, classname: 'bg-success text-dark', delay: 10000 });
    }

    onSubmitProd() {
      if (this.myFormReactivoProd.valid) {
        console.log('Formulario válido:', this.myFormReactivoProd.value);
        this.mapFormValuesToProduct();
        this.myFormReactivoProd.reset();
      } else {
        console.log('form invalido:', this.myFormReactivoProd.value);
      }
    }

    selectedProv() {
      this.newOrder.details = [];
    this.total = 0;
    this.providerIdSelect = this.myFormReactivoOrd.get('provider')?.value || '';
    console.log(this.providerIdSelect);
    this.productServ
      .getProductsByIdProvider(this.providerIdSelect)
      .subscribe((res) => {
        this.products = res;
      });
  }


  formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${year}-${month}-${day}`;
  }

  dateValidator(control: AbstractControl): ValidationErrors | null {
    const currentDate = new Date();
    const selectedDate = new Date(control.value);
  
    if (selectedDate < currentDate) {
      return { pastDate: true };
    }
  
    return null;
  }

  mapFormValuesToProduct() {
    const prodId:number = this.myFormReactivoProd.get('product')?.value || '';
    
    const quantityValue = this.myFormReactivoProd.get('quantity')?.value || 0;

    if(this.flag){
      const productFind = this.products.find((prod) => prod.prodId == prodId) ;
      if (productFind) {
        const indiceProductoExistente = this.newOrder.details.findIndex(
          (prod) => prod.product.prodId == this.idProdEdit
        );
    
        if (indiceProductoExistente !== -1) {
          this.newOrder.details[indiceProductoExistente].detailQuantity =
            parseInt(quantityValue);
          this.newOrder.details[indiceProductoExistente].product = productFind;
          this.newOrder.details[indiceProductoExistente].detailPriceProd = productFind.prodPrice!;
          this.newOrder.details[indiceProductoExistente].detailSubtotal = productFind.prodPrice! * parseInt(quantityValue);
        }
      }
      this.idProdEdit=0;
      this.flag=false; 
    }else{
      const productFind = this.products.find((prod) => prod.prodId == prodId) ;
      
      if (productFind) {
        const indiceProductoExistente = this.newOrder.details.findIndex(
          (prod) => prod.product.prodId == productFind.prodId
        );
    
        if (indiceProductoExistente !== -1) {
          this.newOrder.details[indiceProductoExistente].detailQuantity +=
            parseInt(quantityValue);
          this.newOrder.details[indiceProductoExistente].detailSubtotal = productFind.prodPrice! * this.newOrder.details[indiceProductoExistente].detailQuantity;
        } else {
          this.newOrder.details.push({
            product: productFind,
            detailQuantity: quantityValue,
            detailPriceProd: productFind.prodPrice!,
            detailSubtotal: quantityValue* productFind.prodPrice!,
          });
        } 
      } else{
        console.log("no lo encuentra")
      }
    }
    
    this.calcTotal();
  }
  mapFormValuesToOrder() {
    this.newOrder.orderCod = v4().slice(0,10)

    const dateEString: string = this.myFormReactivoOrd.get('dateE')?.value || '';
    const dateRString: string = this.myFormReactivoOrd.get('dateR')?.value || '';
    const dateE: Date = new Date(dateEString);
    const dateR: Date = new Date(dateRString);
    this.newOrder.orderDateE = dateE.toISOString();
    this.newOrder.orderDateR = dateR.toISOString();


    this.newOrder.orderInfo = this.myFormReactivoOrd.get('address')?.value || '';
    this.newOrder.provider.provId = this.myFormReactivoOrd.get('provider')?.value || '';
    this.newOrder.orderTotal = this.total;
    this.newOrder.orderState = true;
  }

  checkDelete(id?: number) {
    this.idProdDelete=id;
  }
  
  deleteProd(){
    this.newOrder.details = this.newOrder.details.filter((det) => det.product.prodId != this.idProdDelete);
    this.calcTotal();
  }
  
  editProd(prod: DetailOrderBack) {
    this.myFormReactivoProd.setValue({
      product: prod.product.prodId,
      quantity: prod.detailQuantity,
    });
    this.idProdEdit=prod.product.prodId;
    this.flag=true;
  }
  
  calcTotal(){
    this.total = this.newOrder.details.reduce(
      (acc, curr) => acc + curr.detailPriceProd * curr.detailQuantity,
      0
    );
  }
}
