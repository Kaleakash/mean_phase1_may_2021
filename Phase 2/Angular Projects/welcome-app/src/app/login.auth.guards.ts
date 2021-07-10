import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class MyLoginGaurd implements CanActivate{
    constructor(public router:Router){}
    
    canActivate(){
        if(sessionStorage.getItem("key")){
                return true;
        }else {
            this.router.navigate(["login"]);
            return false;
        }
    }
}