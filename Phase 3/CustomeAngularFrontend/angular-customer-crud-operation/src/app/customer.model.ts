import { Address } from "./address.model";
export class Customer {
    constructor(
        public cid:number,
        public cname:string,
        public age:number,
        public address:Address){

    }
}