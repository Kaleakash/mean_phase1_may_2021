import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ChildComponent} from './child.component';
import {HeaderComponent} from './header.component'
@NgModule({
  declarations: [
    AppComponent,ChildComponent,HeaderComponent // all component declaration provide 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
