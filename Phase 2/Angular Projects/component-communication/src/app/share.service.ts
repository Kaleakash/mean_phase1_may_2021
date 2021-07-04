import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  stdNames:string[]=[];
  
  constructor() { }

  setStdName(stdName:string[]):void {
    this.stdNames=stdName;
  }

  getStdName():string[]{
    return this.stdNames;
  }

}
