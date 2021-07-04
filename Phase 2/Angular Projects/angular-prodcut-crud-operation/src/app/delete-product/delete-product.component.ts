import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(public pService:ProductService) { } //DI for Service 

  ngOnInit(): void {
  }

  deleteProduct(idRef:any){
    let id = idRef.value;
    console.log(id);
    this.pService.deleteProductById(id).
    subscribe((result:any)=>console.log(result),
    (error:any)=>console.log(error))
  }
}
