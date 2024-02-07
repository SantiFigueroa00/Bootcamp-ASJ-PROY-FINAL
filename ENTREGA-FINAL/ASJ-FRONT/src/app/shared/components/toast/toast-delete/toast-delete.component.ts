import { Component, inject } from '@angular/core';
import { AppToastDeleteService } from './toast-delete-service';

@Component({
  selector: 'app-toast-delete',
  templateUrl: './toast-delete.component.html',
  styleUrl: './toast-delete.component.css'
})
export class ToastDeleteComponent {
  toastService = inject(AppToastDeleteService);
}
