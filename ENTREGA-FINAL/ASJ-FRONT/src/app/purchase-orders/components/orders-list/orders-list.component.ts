import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';
import { ProvidersService } from '../../../providers/services/providers.service';
import { OrdersService } from '../../services/orders.service';
import { OrderBack } from '../../../models/OrderBack';
import { ProviderBack } from '../../../models/ProviderBack';
import { forkJoin } from 'rxjs';
import { ToastServiceSuccess } from '../../../shared/components/toast/toast-success/toast-service';
import { AppToastService } from '../../../shared/components/toast/toast-info/toast-info-service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css',
})
export class OrdersListComponent implements OnInit, OnDestroy {

  @ViewChild('infoTpl') infoTpl!: TemplateRef<any>;

  noOrders: boolean = true;
  showActivated: boolean = true;
  constructor(
    public providerServ: ProvidersService,
    public orderServ: OrdersService,
    public toastServ: ToastServiceSuccess
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
  
  toastService = inject(AppToastService);

  showToastInfo(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-primary text-white', delay: 5000 });
	}

	ngOnDestroy(): void {
		this.toastService.clear();
	}

  ngOnInit(): void {
    this.providerServ.getProviders().subscribe((res) => {
      this.providers = res;
      this.loadOrdersForProviders();
    });
  }

  loadOrdersForProviders() {
    const requests = this.providers.map((prov) =>
      this.orderServ.getOrdersActivatedByProv(prov.provId)
    );

    forkJoin(requests).subscribe((activatedOrdersArray: any[]) => {
      activatedOrdersArray.forEach((orders, index) => {
        const prov = this.providers[index];
        prov.orders = orders || [];

        if (prov.orders && prov.orders.length > 0) {
          prov.showActivated = true;
          this.noOrders = false;
          return;
        }

        this.orderServ
          .getOrdersCancelledByProv(prov.provId)
          .subscribe((cancelledOrders) => {
            prov.orders = cancelledOrders || [];

            if (prov.orders && prov.orders.length > 0) {
              prov.showActivated = false;
              this.noOrders = false;
              return;
            }

            if (this.noOrders) {
              this.noOrders = true;
            }
          });
      });
    });

    console.log(this.providers)
  }

  statusShow(provId?: number) {
    this.providers.forEach((prov) => {
      if (prov.provId == provId) {
        prov.showActivated = !prov.showActivated;
      }

    });
    this.loadOrdersByStatus(provId);
  }

  loadOrdersByStatus(provId?:number) {
    this.providers.forEach((prov) => {
      if(prov.provId == provId) {
        if (prov.showActivated) {
          this.orderServ
            .getOrdersActivatedByProv(prov.provId)
            .subscribe((orders) => {
              if (orders.length > 0) {
                prov.orders = orders;
              } else {
                this.showToastInfo(this.infoTpl);
                prov.showActivated = !prov.showActivated;
                this.loadOrdersByStatus(prov.provId);
              }
            });
        } else {
          this.orderServ
            .getOrdersCancelledByProv(prov.provId)
            .subscribe((orders) => {
              if (orders.length > 0) {
                prov.orders = orders;
              } else {
                this.showToastInfo(this.infoTpl);
                prov.showActivated = !prov.showActivated;
                this.loadOrdersByStatus(prov.provId);
              }
            });
        }
      }
    });
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
