import { Injectable, TemplateRef } from '@angular/core';

export interface ToastDelete {
  template: TemplateRef<any>;
	classname?: string;
  delay?: number;
}

@Injectable({ providedIn: 'root' })
export class AppToastDeleteService {
  toasts: ToastDelete[] = [];

	show(toast: ToastDelete) {
		this.toasts.push(toast);
	}

	remove(toast: ToastDelete) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}
