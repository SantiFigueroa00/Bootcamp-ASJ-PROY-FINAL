import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderBack } from '../../models/ProviderBack';
import { Provider } from '../../models/Provider';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  
  constructor(private http : HttpClient) { }
  
  API_URL = "http://localhost:8080/providers";
  
  public createProvider(provider:ProviderBack):Observable<any>{
    return this.http.post(this.API_URL,provider,{responseType: 'text'}).pipe(
      catchError(this.handleError)
    );
  }
  getProviders() :Observable<any>{
    return this.http.get(this.API_URL);
  }
  deleteProvider(id?: number) :Observable<any>{
    return this.http.delete(`${this.API_URL}/${id}`,{responseType: 'text'});
  }
  putProvider(p:ProviderBack) :Observable<any>{
    return this.http.put(`${this.API_URL}/${p.provId}`,p,{responseType: 'text'}).pipe(
      catchError(this.handleError)
    );
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

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error occurred';
    let errorObject = new Map<string, string>(); // Objeto Map para almacenar los detalles del error
    
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
      return errorMessage;
    } else {
        errorObject = JSON.parse(error.error);
    }
    return throwError(errorObject);
  }
}
