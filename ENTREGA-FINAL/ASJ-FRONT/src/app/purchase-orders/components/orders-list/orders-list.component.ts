import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { ProvidersService } from '../../../providers/services/providers.service';
import { OrdersService } from '../../services/orders.service';
import { OrderBack } from '../../../models/OrderBack';
import { ProviderBack } from '../../../models/ProviderBack';
import { forkJoin } from 'rxjs';
import { ToastServiceSuccess } from '../../../shared/components/toast/toast-success/toast-service';
import { AppToastService } from '../../../shared/components/toast/toast-info/toast-info-service';
import { SearchProviderPipe } from '../../../providers/pipes/search-provider.pipe';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css',
})
export class OrdersListComponent implements OnInit, OnDestroy {

  @ViewChild('infoTpl') infoTpl!: TemplateRef<any>;

  noOrders: boolean = true;
  showActivated: boolean = true;
  searchText: string = '';
  constructor(
    public providerServ: ProvidersService,
    public orderServ: OrdersService,
    public toastServ: ToastServiceSuccess,
    private searchProvider: SearchProviderPipe
  ) {}

  providers: ProviderBack[] = [];
  orderCancel: OrderBack = {
    orderId: 0,
    orderCod: '',
    orderDateE: '',
    orderDateR: '',
    orderInfo: '',
    orderTotal: 0,
    orderState: false,
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
    details: [],
  };
  
  currentPage: number = 1;
  itemsPerPage: number = 2;
  displayedProviders: ProviderBack[] = [];
  auxProviders: ProviderBack[] = [];
  public math = Math;

  toastService = inject(AppToastService);

  showToastInfo(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-primary text-white', delay: 5000 });
	}

	ngOnDestroy(): void {
		this.toastService.clear();
	}

  ngOnInit(): void {
    this.loadProvidersWithOrders();
  }

  applyFilters() {
    this.auxProviders = this.providers;
    this.auxProviders = this.searchProvider.transform(this.auxProviders,this.searchText)!;
    this.updatePageData();
  }

  updatePageData() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedProviders = this.auxProviders.slice(startIndex, endIndex);
  }

  setPage(pageNumber: number) {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(this.providers.length / this.itemsPerPage)
    ) {
      this.currentPage = pageNumber;
      this.updatePageData();
    }
  }

  getPages(): number[] {
    const pageCount = Math.ceil(this.auxProviders.length / this.itemsPerPage);
    return Array.from({ length: pageCount }, (_, index) => index + 1);
  }

  loadProvidersWithOrders(){
    this.providerServ.getProviders().subscribe((res) => {
      this.providers = res;
      this.applyFilters();
      this.loadOrdersForProviders();
    });
  }

  loadOrdersForProviders(): void {
    const requests = this.providers.map((prov) =>
      forkJoin([
        this.orderServ.getOrdersActivatedByProv(prov.provId),
        this.orderServ.getOrdersCancelledByProv(prov.provId)
      ])
    );

    forkJoin(requests).subscribe((ordersArray: any[]) => {
      ordersArray.forEach(([activatedOrders, cancelledOrders], index) => {
        const prov = this.providers[index];
        prov.orders = activatedOrders || [];
        if(prov.orders!.length > 0){
          prov.showActivated=true;
        }else{
          prov.orders = cancelledOrders || [];
          prov.showActivated = false;
        }
        
        if (cancelledOrders.length > 0 || cancelledOrders.length > 0) {
          this.noOrders = false;
        }
      });
    });
  }

  toggleOrderStatus(provId?: number): void {
    const provider = this.providers.find(p => p.provId === provId);
    if (provider) {
      provider.showActivated = !provider.showActivated;
      this.loadOrdersByStatus(provId);
    }
  }

  loadOrdersByStatus(provId?:number) {
    const provider = this.providers.find(p => p.provId === provId);
    if (provider) {
      const ordersObservable = provider.showActivated ?
        this.orderServ.getOrdersActivatedByProv(provId) :
        this.orderServ.getOrdersCancelledByProv(provId);
        
      ordersObservable.subscribe((orders) => {
        provider.orders = orders || [];
        if(!provider.orders!.length){
          this.showToastInfo(this.infoTpl);
          provider.showActivated = !provider.showActivated;
          this.loadOrdersByStatus(provider.provId)
        }
      });
    }
  }

  checkCancel(o: OrderBack) {
    this.orderCancel = o;
  }

  setCancel() {
    this.orderCancel.orderState = false;
    this.orderServ.putOrder(this.orderCancel).subscribe((res) => {
      console.log(res);
      this.loadOrdersByStatus(this.orderCancel.provider.provId);
    });
  }

  setActive(o: OrderBack) {
    o.orderState = true;
    this.orderServ.putOrder(o).subscribe((res) => {
      console.log(res);
      this.loadOrdersByStatus(o.provider.provId);
    });
  }
}
