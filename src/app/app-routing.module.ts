import { NgModule} from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {ProductPriceComponent} from './product-price/product-price.component';
import {ProductOverviewComponent} from './product-overview/product-overview.component';
import {ProductListComponent} from './product-list/product-list.component';
import {SignupComponent} from './signup/signup.component';
import {RetailEnrollmentComponent} from './retail-enrollment/retail-enrollment.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: 'signup', component: SignupComponent},
  { path: 'retail-enrollment', component: RetailEnrollmentComponent},
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductListComponent},
  { path: 'products/:id',
    component: ProductDetailComponent,
    children: [
      { path: 'overview', component: ProductOverviewComponent},
      { path: 'price', component: ProductPriceComponent}
    ]
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}

