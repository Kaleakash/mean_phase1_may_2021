import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {
  loginRef = new FormGroup({
    uname:new FormControl("",[Validators.required,Validators.minLength(2)]),
    pname:new FormControl("",[Validators.required,Validators.pattern("[a-z]\\d{2}")])
  })  
  msg:string=""
  constructor() { }
  ngOnInit(): void {
  }
  checkUser() {
    //console.log("Event fired..")
    let login = this.loginRef.value;
    let user = login.uname;
    let pass  = login.pname;
    // console.log(login)
    // console.log(user)
    // console.log(pass)
    if(user=="Raj" && pass=="123"){
        this.msg = "Successfully Login"
    }else {
        this.msg = "Failure try once again"
    }
  }

}
