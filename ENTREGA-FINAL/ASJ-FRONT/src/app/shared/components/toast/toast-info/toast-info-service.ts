import { Injectable, TemplateRef } from '@angular/core';

export interface ToastInfo {
  template: TemplateRef<any>;
	classname?: string;
  delay?: number;
}

@Injectable({ providedIn: 'root' })
export class AppToastService {
  toasts: ToastInfo[] = [];

	show(toast: ToastInfo) {
		this.toasts.push(toast);
	}

	remove(toast: ToastInfo) {
		this.toasts = this.toasts.filter((t) => t !== toast);
	}

	clear() {
		this.toasts.splice(0, this.toasts.length);
	}
}
