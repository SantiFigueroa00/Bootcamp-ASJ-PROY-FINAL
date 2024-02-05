import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  
  API_PROV='http://localhost:8080/providers'
  API_PROD='http://localhost:8080/products'
  API_ORD='http://localhost:8080/orders'

  constructor(private http: HttpClient) { }
  
  getTotalOrders() : Observable<any>{
    return this.http.get(this.API_ORD+'/total');
  }

  getPercentOrdersByProv() : Observable<any>{
    return this.http.get(this.API_ORD+'/percentages');
  }

  getTotalProducts() : Observable<any>{
    return this.http.get(this.API_PROD+'/total');
  }

  getQuantityProdByCat() : Observable<any>{
    return this.http.get(this.API_PROD+'/quantityCat');
  }

  getTotalProviders() : Observable<any>{
    return this.http.get(this.API_PROV+'/total');
  }

  getPercentProvidersByProvince() : Observable<any>{
    return this.http.get(this.API_PROV+'/percentages');
  }
}
