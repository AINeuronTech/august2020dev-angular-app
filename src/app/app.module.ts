import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import {AppRoutingModule} from './app-routing.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { ProductPriceComponent } from './product-price/product-price.component';


@NgModule({
  declarations: [AppComponent, LoginComponent, SignupComponent, NavbarComponent, FooterComponent, ProductsComponent, ProductDetailComponent, ProductListComponent, PageNotFoundComponent, ProductOverviewComponent, ProductPriceComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
