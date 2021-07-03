import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productRef = new FormGroup({
    id:new FormControl(),
    pname:new FormControl(),
    price:new FormControl()
  })
  msg:string=""
  constructor(public pService:ProductService) { } //DI for service 
  ngOnInit(): void {
  }
  storeProduct(){
    
     let product  = this.productRef.value;
     
     this.pService.storeProductDetails(product).subscribe((result:any)=>{
          this.msg="Record stored successfully"
     },(error:any)=> {
          this.msg = "Error generated id must be unique";
     })

     this.productRef.reset();   // clear data after operation on view or tempalte in textfield
  }
}
