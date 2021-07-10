import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { MyLoginGaurd } from './login.auth.guards';
import { OrderModule } from './order/order.module';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    LoginComponent,
    HomeComponent,
    NotFoundComponent 
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,
    OrderModule
  ],
  providers: [MyLoginGaurd],
  bootstrap: [AppComponent]
})

export class AppModule { }
