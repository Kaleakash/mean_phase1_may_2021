import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'  // it register in app.module.ts in providers property. providers: [],
})
export class ProductService {

  constructor(public http:HttpClient) { } //DI for Httpclient

  // we retrieve json data from json-server and converted into 
  //product of array.
  getAllProductDetails():Observable<Product[]> {
   return this.http.get<Product[]>("http://localhost:3000/product")
  }


}
