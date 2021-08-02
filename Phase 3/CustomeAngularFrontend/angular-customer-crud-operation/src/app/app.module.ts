import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchCustomerByIdComponent } from './search-customer-by-id/search-customer-by-id.component';
import { DisplayCustomerDetailsComponent } from './display-customer-details/display-customer-details.component';
import { StoreCustomerInfoComponent } from './store-customer-info/store-customer-info.component';
import { DeleteCustomerDetailsComponent } from './delete-customer-details/delete-customer-details.component';
import { UpdateCustomerInfoComponent } from './update-customer-info/update-customer-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SearchCustomerByIdComponent,
    DisplayCustomerDetailsComponent,
    StoreCustomerInfoComponent,
    DeleteCustomerDetailsComponent,
    UpdateCustomerInfoComponent
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
