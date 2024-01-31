import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../../models/Order';
import { Provider } from '../../../models/Provider';
import { ProvidersService } from '../../../providers/services/providers.service';
import { OrderBack } from '../../../models/OrderBack';

@Component({
  selector: 'app-orders-detail',
  templateUrl: './orders-detail.component.html',
  styleUrl: './orders-detail.component.css'
})
export class OrdersDetailComponent implements OnInit{
  orderId: string|null='';
  order:OrderBack={
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
  }


  constructor(public orderServ: OrdersService, public providerServ : ProvidersService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('id');
    console.log(this.orderId);
    this.orderServ.getOrderById(this.orderId).subscribe((res)=>{
      this.order=res;
    });
  }

}
