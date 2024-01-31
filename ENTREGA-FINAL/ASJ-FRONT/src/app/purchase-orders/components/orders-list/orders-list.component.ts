import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../../providers/services/providers.service';
import { OrdersService } from '../../services/orders.service';
import { Provider } from '../../../models/Provider';
import { Order } from '../../../models/Order';
import { forkJoin } from 'rxjs';
import { OrderBack } from '../../../models/OrderBack';
import { ProviderBack } from '../../../models/ProviderBack';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css'
})
export class OrdersListComponent implements OnInit {

  
  noOrders: boolean = true;

  constructor(public providerServ :ProvidersService,public orderServ : OrdersService){}
  
  
  providers:ProviderBack[]=[]
  orderCancel:OrderBack = {
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

  ngOnInit(): void {
    this.providerServ.getProviders().subscribe((res)=>{
      this.providers=res; 
      this.loadOrdersForProviders();
    });
  }
  

  loadOrdersForProviders(){
    this.providers.forEach(prov => {
      this.orderServ.getOrdersByProv(prov.provId).subscribe((orders) => {
        prov.orders = orders || [];
  
        prov.orders?.sort((a:OrderBack, b:OrderBack) => {
          if (a.orderState && !b.orderState) {
            return -1;
          } else if (!a.orderState && b.orderState) {
            return 1;
          } else {
            return 0;
          }
        });
        if (prov.orders && prov.orders.length > 0) {
          this.noOrders = false;
          return; // Break out of the loop if orders are found for any provider
        }
  
        
        if (this.noOrders) {
          this.noOrders = true;
        }
      });
    });
  }

  checkCancel(o: OrderBack) {
    this.orderCancel=o;
  }

  setCancel() {
    this.orderCancel.orderState=false;
    this.orderServ.putOrder(this.orderCancel).subscribe((res)=>{
      console.log(res);
      this.loadOrdersForProviders();
    });
  }

  setActive(o : OrderBack) {
    o.orderState=true;
    this.orderServ.putOrder(o).subscribe((res)=>{
      console.log(res);
      this.loadOrdersForProviders();
    });
  }

}
