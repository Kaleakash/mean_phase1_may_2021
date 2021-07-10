import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { MyLoginGaurd } from './login.auth.guards';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewOrdersComponent } from './order/view-orders/view-orders.component';

// This array hold all routing rules. 
const routes: Routes = [
  {path:"aboutus",component:AboutUsComponent},
  {path:"contactus",component:ContactUsComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[MyLoginGaurd],
  children:[
    {path:"vieworders",component:ViewOrdersComponent}
  ]},
  {path:"",redirectTo:"login",pathMatch:"prefix"},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
