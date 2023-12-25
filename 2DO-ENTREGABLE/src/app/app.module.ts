import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AsidebarComponent } from './shared/components/asidebar/asidebar.component';
import { ProductsListComponent } from './products-services/components/products-list/products-list.component';
import { ProductsAddComponent } from './products-services/components/products-add/products-add.component';
import { ProvidersListComponent } from './providers/components/providers-list/providers-list.component';
import { OrdersListComponent } from './purchase-orders/components/orders-list/orders-list.component';
import { OrdersAddComponent } from './purchase-orders/components/orders-add/orders-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './dashboard/components/home/home.component';
import { ProvidersAddComponent } from './providers/components/providers-add/providers-add.component';
import { ProvidersService } from './providers/services/providers.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AsidebarComponent,
    ProductsListComponent,
    ProductsAddComponent,
    ProvidersListComponent,
    OrdersListComponent,
    OrdersAddComponent,
    HomeComponent,
    ProvidersAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
