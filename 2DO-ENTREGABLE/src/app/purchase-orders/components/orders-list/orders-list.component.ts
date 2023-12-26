import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../../../providers/services/providers.service';
import { OrdersService } from '../../services/orders.service';
import { Provider } from '../../../models/Provider';
import { Order } from '../../../models/Order';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css'
})
export class OrdersListComponent implements OnInit {
  
  constructor(public providerServ :ProvidersService,public orderServ : OrdersService){}
  
  providers:Provider[]=[]
  orderCancel:Order = {
    id:'',
    dateE:new Date(),
    dateR:new Date(),
    info:'',
    provider:'',
    products:[],
    total:0,
    state:false
  }

  ngOnInit(): void {
    this.providerServ.getProviders().subscribe((res)=>{
      this.providers=res; 
      this.loadOrdersForProviders();
    });
  }
  
  loadOrdersForProviders() {
    this.providers.forEach((provider) => {
      this.orderServ.getOrdersByProv(provider.id).subscribe((orders) => {
        provider.orders = orders ||[];
      });
    });
  }

  checkCancel(o: Order) {
    this.orderCancel=o;
  }

  setCancel() {
    this.orderCancel.state=false;
    this.orderServ.putOrder(this.orderCancel).subscribe((res)=>{
      console.log(res);
    });
  }

  setActive(o : Order) {
    o.state=true;
    this.orderServ.putOrder(o).subscribe((res)=>{
      console.log(res);
    });
  }
}
