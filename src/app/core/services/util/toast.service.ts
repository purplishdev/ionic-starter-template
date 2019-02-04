import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { BaseService } from '../base.service';

@Injectable({
	providedIn: 'root'
})
export class ToastService extends BaseService {

	constructor(
		private toastController: ToastController
	) {
		super();
	}

	async show(message: string, duration: number = 3000) {
		const toast = await this.toastController.create({
			message: message,
			position: 'bottom',
			duration: duration
		});
		return await toast.present();
	}
}
