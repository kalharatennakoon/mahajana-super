import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ContentLimiterPipe } from './content-limiter.pipe';

// importing ReactiveFormModule to create Reactive Forms
import { ReactiveFormsModule } from '@angular/forms';

// importing HttpClientModule to aloow the service to commuinicate with the backend
import { HttpClient, HttpClientModule } from '@angular/common/http';


// this array contains all the components that used by the application
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    ContentLimiterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
