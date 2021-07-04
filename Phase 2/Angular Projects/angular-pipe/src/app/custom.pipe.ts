import { Pipe, PipeTransform } from "@angular/core";


@Pipe({name:"GenderPipe"})
export class GenderType implements PipeTransform{
    transform(value:any,gender:any){
        if(gender=="male"){
            return "Mr "+value;
        }else {
            return "Miss "+value;
        }
    }
}