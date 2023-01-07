import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ContentLimitterPipe } from './Pipes/content-limitter.pipe';

// importing ReactiveFormModule to create Reactive Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// importing HttpClientModule to aloow the service to commuinicate with the backend
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { ViewProductDetailsComponent } from './components/view-product-details/view-product-details.component';



// this array contains all the components that used by the application
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    ContentLimitterPipe,
    EditProductComponent,
    ViewProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
