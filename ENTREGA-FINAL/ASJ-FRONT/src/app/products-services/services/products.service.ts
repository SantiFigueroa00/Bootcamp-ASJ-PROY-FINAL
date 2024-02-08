import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/Product';
import { ProductBack } from '../../models/ProductBack';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  
  constructor(private http : HttpClient) { }
  
  API_URL = "http://localhost:8080/products"
  public createProduct(product:ProductBack):Observable<any>{
    return this.http.post(this.API_URL,product,{responseType:'text'});
  }
  getProducts() :Observable<any>{
    return this.http.get(this.API_URL);
  }
  deleteProduct(id?: number) :Observable<any>{
    return this.http.delete(`${this.API_URL}/${id}`,{responseType:'text'});
  }
  putProduct(p:ProductBack) :Observable<any>{
    return this.http.put(`${this.API_URL}/${p.prodId}`,p,{responseType:'text'});
  }
  
  getProductsByIdProvider(providerIdSelect?: number):Observable<any> {
    return this.http.get(`${this.API_URL}/byProv/${providerIdSelect}`);
  }

  getProductsByIdProviderActivated(providerIdSelect?: number):Observable<any> {
    return this.http.get(`${this.API_URL}/byProv/${providerIdSelect}?status=false`);
  }

  getProductsByIdCategory(categoryIdSelect?: number):Observable<any> {
    return this.http.get(`${this.API_URL}/byCat/${categoryIdSelect}`);
  }
  getProductById(productId: string | null):Observable<any> {
    return this.http.get(`${this.API_URL}/${productId}`);
  }

  getCategories():Observable<any>  {
    return this.http.get(`http://localhost:8080/categories`);
  }

  createProductImage(imgUrl: any, prodId: any) {
    const newImg = {
      imgUrl: imgUrl,
      product:{
        prodId: prodId
      }
    }
    return this.http.post(`http://localhost:8080/images`,newImg,{responseType:'text'});
  }

}
