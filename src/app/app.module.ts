import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreenComponent } from './login-screen/login-screen.component';
import { RegisterScreenComponent } from './register-screen/register-screen.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { PaymentPortalComponent } from './payment-portal/payment-portal.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

const myRoute:Routes=[
  {
    path:"",
    component:HomeScreenComponent
  },
  {
    path:"register",
    component:RegisterScreenComponent
  },
  
  {
    path:"pay",
    component:PaymentPortalComponent
  },
  {
    path:"login",
    component:LoginScreenComponent
  }

]


@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegisterScreenComponent,
    HomeScreenComponent,
    PaymentPortalComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
