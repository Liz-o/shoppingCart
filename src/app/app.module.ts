import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './views/categories/categories.component';
import { NavBarComponent } from './views/nav-bar/nav-bar.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductComponent } from './views/product/product.component';
import { CartComponent } from './views/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { myMaterialModule } from './material-module';
import { AboutComponent } from './views/about/about.component';
import { ContactComponent } from './views/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductCounterComponent } from './views/product-counter/product-counter.component';
;

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductsComponent,
    CategoriesComponent,
    ProductComponent,
    CartComponent,
    AboutComponent,
    ContactComponent,
    ProductCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    myMaterialModule
  ],
  entryComponents: [CartComponent],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
