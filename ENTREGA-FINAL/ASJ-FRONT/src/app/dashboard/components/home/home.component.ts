import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { OrdersService } from '../../../purchase-orders/services/orders.service';
import { OrderBack } from '../../../models/OrderBack';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  totalOrders: number = 0;
  percentagesOrdes: any[] = [];
  orders: OrderBack[] = [];

  totalProducts: number = 0;
  prodByCat: any[] = [];

  totalProviders: number = 0;
  percentagesProvinces: any[] = [];
  ordersForCurrentWeek: number=0;

  constructor(public homeServ: HomeService, public orderServ: OrdersService) {}

  ngOnInit(): void {
    this.homeServ.getTotalOrders().subscribe((data) => {
      this.totalOrders = data;
    });

    this.homeServ.getPercentOrdersByProv().subscribe((data) => {
      this.percentagesOrdes = data;
    });

    this.homeServ.getTotalProducts().subscribe((data) => {
      this.totalProducts = data;
    });

    this.homeServ.getQuantityProdByCat().subscribe((data) => {
      this.prodByCat = data;
    });

    this.homeServ.getTotalProviders().subscribe((data) => {
      this.totalProviders = data;
    });

    this.homeServ.getPercentProvidersByProvince().subscribe((data) => {
      this.percentagesProvinces = data;
    });

    this.orderServ.getOrders().subscribe((data) => {
      this.orders = data;
      this.ordersForCurrentWeek = this.getOrdersForCurrentWeek();
    });
  }

  getBackgroundColorClass(index: number): string {
    const colors = [
      'bg-label-primary',
      'bg-label-success',
      'bg-label-danger',
      'bg-label-info',
    ]; 
    return colors[index % colors.length];
  }

  getOrdersForCurrentWeek(): number {
    const currentDate = new Date();
    const firstDayOfWeek = this.getFirstDayOfWeek(currentDate);
    const lastDayOfWeek = this.getLastDayOfWeek(currentDate);
  
    return this.orders.filter((order) => {
      const orderDate = new Date(Date.parse(order.orderDateR));
      return orderDate >= firstDayOfWeek && orderDate <= lastDayOfWeek;
    }).length;
  }
  
  private getFirstDayOfWeek(date: Date): Date {
    const dayOfWeek = date.getDay();
    const diff = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // adjust when day is Sunday
    return new Date(date.setDate(diff));
  }
  
  private getLastDayOfWeek(date: Date): Date {
    const dayOfWeek = date.getDay();
    const diff = date.getDate() - dayOfWeek + 7; // adjust when day is Sunday
    return new Date(date.setDate(diff));
  }
}
