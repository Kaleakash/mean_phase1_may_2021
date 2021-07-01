import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

import { Observable } from "rxjs";
import { Fake } from "./app/fake.model";

@Injectable()
export class FakeService {

    constructor(public http:HttpClient){} //DI for HttpClient


    loadFakeJsonData():void {
        this.http.get("https://jsonplaceholder.typicode.com/todos").
        subscribe(data=>console.log(data),
        error=>console.log("Error "+error),
        ()=>console.log("completed"))
        console.log("Normal Statement")
    }
    loadData() : void {
        this.http.get("https://jsonplaceholder.typicode.com/todos").
        subscribe(function(d){
            console.log(d)
            console.log("Normal Statement inside then")
        },function(e){
            console.log(e)
        },
        function(){
            console.log("completed")
            console.log("Normal Statement inside then after completed")
        })
        console.log("Normal Statement")
    }
    
    loadDataInTableFormat():Observable<Fake[]> {
        return this.http.get<Fake[]>("https://jsonplaceholder.typicode.com/todos");
    }

}