import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent
  ],
  // imports: [
  //   BrowserModule,
  //   AppRoutingModule,
  //   NgModule,
  //   FormsModule,
  //   RouterModule
  // ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([]), // Remove the incorrect 'NgModule' import
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
