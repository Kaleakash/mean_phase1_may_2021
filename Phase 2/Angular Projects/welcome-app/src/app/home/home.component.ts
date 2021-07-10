import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:string="";
  constructor(public router:Router) { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("key");
    
    if(obj!=null){
      this.user = obj;
    }

  }
  logout() {
    sessionStorage.removeItem("key");
    this.router.navigate(["login"]);
  }

}
