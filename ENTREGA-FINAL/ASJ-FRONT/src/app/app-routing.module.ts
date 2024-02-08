import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersListComponent } from './providers/components/providers-list/providers-list.component';
import { HomeComponent } from './dashboard/components/home/home.component';
import { ProvidersAddComponent } from './providers/components/providers-add/providers-add.component';
import { ProductsAddComponent } from './products-services/components/products-add/products-add.component';
import { ProductsListComponent } from './products-services/components/products-list/products-list.component';
import { OrdersAddComponent } from './purchase-orders/components/orders-add/orders-add.component';
import { OrdersListComponent } from './purchase-orders/components/orders-list/orders-list.component';
import { OrdersDetailComponent } from './purchase-orders/components/orders-detail/orders-detail.component';
import { ProvidersDetailComponent } from './providers/components/providers-detail/providers-detail.component';
import { ProductsDetailComponent } from './products-services/components/products-detail/products-detail.component';
import { AppComponent } from './app.component';
import { CategoryAddComponent } from './categories/components/category-add/category-add.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: HomeComponent },
  {
    path: 'providers', 
    children: [
      { path: 'add', component: ProvidersAddComponent },
      { path: 'list', component: ProvidersListComponent },
      { path: 'detail/:id', component: ProvidersDetailComponent }
    ]
  },
  {
    path: 'products', 
    children: [
      { path: 'add', component: ProductsAddComponent },
      { path: 'list', component: ProductsListComponent },
      { path: 'detail/:id', component: ProductsDetailComponent },
      { path: 'categories', component: CategoryAddComponent }
    ]
  },
  {
    path: 'orders', 
    children: [
      { path: 'add', component: OrdersAddComponent },
      { path: 'list', component: OrdersListComponent },
      { path: 'detail/:id', component: OrdersDetailComponent }
    ]
  },
  {
    path: 'categories', 
    children: [
      { path: 'add', component: CategoryAddComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
