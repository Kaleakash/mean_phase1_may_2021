import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  constructor(public pService:ProductService) { } //DI for Service

  ngOnInit(): void {
  }

  updateProduct(productRef:NgForm){
    let product = productRef.value;
    //console.log(product);
    this.pService.updateProductPrice(product).
    subscribe((result:any)=>console.log(result),
    (error:any)=>console.log(error));
    
  }
}
