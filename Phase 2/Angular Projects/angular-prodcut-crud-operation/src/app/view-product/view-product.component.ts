import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  products:Array<Product>=[
    
  ];   // created the empty array to load theata 
  flag:boolean = false;
  constructor(public pService:ProductService) { } //DI for ProductService

  ngOnInit(): void {
  }

  loadJsonData(): void {
    this.flag=true;
    this.pService.getAllProductDetails().
    subscribe(result=>this.products=result,err=>console.log(err))
  }
}
