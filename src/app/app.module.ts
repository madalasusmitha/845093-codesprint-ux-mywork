import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {  FormsModule,  ReactiveFormsModule  }  from  '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { VieworderComponent } from './vieworder/vieworder.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactUsComponent,
    PlaceOrderComponent,
    VieworderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ContactUsComponent]
})
export class AppModule { }
