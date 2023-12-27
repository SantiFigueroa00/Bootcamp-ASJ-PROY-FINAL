import { Component, inject, OnDestroy, TemplateRef } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { ToastServiceSuccess } from './toast-service';
import { ToastsContainer } from './toasts-container.component';

@Component({
	selector: 'ngbd-toast-global',
	standalone: true,
	imports: [NgbTooltipModule, ToastsContainer],
	templateUrl: './toast-global.component.html',
})
export class NgbdToastGlobal implements OnDestroy {
	toastService = inject(ToastServiceSuccess);

	showSuccess(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-success text-dark', delay: 10000 });
	}

	ngOnDestroy(): void {
		this.toastService.clear();
	}
}