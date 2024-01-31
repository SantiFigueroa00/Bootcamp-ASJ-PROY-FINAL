import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../../models/Order';
import { Observable } from 'rxjs';
import { OrderBack } from '../../models/OrderBack';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  
  constructor(private http: HttpClient) { }
  
  API_URL = 'http://localhost:8080/orders'
  createOrder(order: OrderBack):Observable<any> {
    return this.http.post(this.API_URL, order,{responseType:'text'});
  }
  
  getOrders() :Observable<any>{
    return this.http.get(this.API_URL);
  }
  
  getOrdersByProv(provId?:number):Observable<any> {
    return this.http.get(`${this.API_URL}/byProv/${provId}`)
  }
  
  putOrder(order: OrderBack) :Observable<any>{
    return this.http.put(`${this.API_URL}/${order.orderId}`,order,{responseType:'text'});
  }

  getOrderById(orderId: string | null) :Observable<any>{
    return this.http.get(`${this.API_URL}/${orderId}`);
  }
}
