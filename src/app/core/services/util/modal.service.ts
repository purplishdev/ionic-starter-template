import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Components, ModalOptions } from '@ionic/core';
import { BaseService } from '../base.service';

@Injectable({
	providedIn: 'root'
})
export class ModalService extends BaseService {

	constructor(
		private modalCtrl: ModalController
	) {
		super();
	}

	async create(options?: ModalOptions): Promise<Components.IonModal> {
		return this.modalCtrl.create(options);
	}

	dismiss(result?: any) {
		this.modalCtrl.dismiss(result);
	}
}
