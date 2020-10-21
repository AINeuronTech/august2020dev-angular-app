import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {ProductsComponent} from './products/products.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductsComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
