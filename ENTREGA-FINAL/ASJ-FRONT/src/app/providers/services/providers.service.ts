import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderBack } from '../../models/ProviderBack';
import { Provider } from '../../models/Provider';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  
  constructor(private http : HttpClient) { }
  
  API_URL = "http://localhost:8080/providers";
  
  public createProvider(provider:ProviderBack):Observable<any>{
    return this.http.post(this.API_URL,provider,{responseType: 'text'});
  }
  getProviders() :Observable<any>{
    return this.http.get(this.API_URL);
  }
  deleteProvider(id?: number) :Observable<any>{
    return this.http.delete(`${this.API_URL}/${id}`,{responseType: 'text'});
  }
  putProvider(p:ProviderBack) :Observable<any>{
    return this.http.put(`${this.API_URL}/${p.provId}`,p,{responseType: 'text'});
  }
  
  getProviderById(id: string) :Observable<any>{
    return this.http.get(`${this.API_URL}/${id}`);
  }
  
  getCountries() :Observable<any>{
    return this.http.get("http://localhost:8080/countries");
  }
  
  getProvincesByCountry(idCountrySelected?: number) :Observable<any> {
    return this.http.get("http://localhost:8080/provinces/byCountry/"+idCountrySelected);
  }

  getItems() :Observable<any>{
    return this.http.get("http://localhost:8080/items");
  }

  getIvaConditions() :Observable<any>{
    return this.http.get("http://localhost:8080/iva");
  }
}
