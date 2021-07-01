import { Injectable } from "@angular/core";

@Injectable()
export class MyCustom {

    sayHello():string {
        return "Welcome to user-defined service using DI";
    }
}