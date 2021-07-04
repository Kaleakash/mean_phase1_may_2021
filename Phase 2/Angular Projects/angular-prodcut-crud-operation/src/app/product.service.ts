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

  // post method takes two parameter 1st url and 2nd json data. 
  storeProductDetails(product:Product):any{
    return this.http.post("http://localhost:3000/product",product)
   }

   // put (update) takes two parameter 
   //1st paramter url 
   //2nd paramter json data

   updateProductPrice(product:Product):any{
     return this.http.put("http://localhost:3000/product/"+product.id,product);
   }

   deleteProductById(id:any):any{
     return this.http.delete("http://localhost:3000/product/"+id)
   }

}
