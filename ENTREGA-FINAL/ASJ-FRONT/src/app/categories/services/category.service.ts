import { Injectable } from '@angular/core';
import { CategoryBack } from '../../models/CategoryBack';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  API_URL = 'http://localhost:8080/categories';

  
  constructor(private http:HttpClient) { }

  createProduct(newCategory: CategoryBack) : Observable<any>{
    return this.http.post(this.API_URL,newCategory,{responseType:'text'});
  }

  getCategories() : Observable<any>{
    return this.http.get(this.API_URL);
  }

  deleteCat(id?:number): Observable<any>{
    return this.http.delete(this.API_URL+'/'+id,{responseType:'text'});
  }

  putCat(c:CategoryBack): Observable<any>{
    return this.http.put(this.API_URL+'/'+c.catId,c,{responseType:'text'});
  }
}
