import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ContentLimiterPipe } from './content-limiter.pipe';


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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
