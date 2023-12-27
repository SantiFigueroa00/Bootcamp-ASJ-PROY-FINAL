import { Component, inject, OnDestroy, TemplateRef } from '@angular/core';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

import { ToastServiceEdit } from './toast-service';
import { ToastsContainer } from './toasts-container.component';

@Component({
	selector: 'ngbd-toast-edit',
	standalone: true,
	imports: [NgbTooltipModule, ToastsContainer],
	templateUrl: './toast-edit.component.html',
})
export class NgbdToastEdit implements OnDestroy {
	toastService = inject(ToastServiceEdit);

	showEdit(template: TemplateRef<any>) {
		this.toastService.show({ template, classname: 'bg-primary text-white', delay: 10000 });
	}

	ngOnDestroy(): void {
		this.toastService.clear();
	}
}