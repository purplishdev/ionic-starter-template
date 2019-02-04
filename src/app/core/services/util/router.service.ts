import { Injectable } from '@angular/core';
import { NavigationExtras, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AnimationOptions, NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { BaseService } from '../base.service';

@Injectable({
	providedIn: 'root'
})
export class RouterService extends BaseService {

	constructor(
		private ionRouter: NavController
	) {
		super();
	}

	navigateForward(commands: any[], options?: NavigationExtras) {
		this.ionRouter.navigateForward(commands, options);
	}

	navigateBack(commands: any[], options?: NavigationExtras) {
		this.ionRouter.navigateBack(commands, options);
	}

	navigateRoot(url: string | UrlTree | any[], options?: NavigationOptions) {
		this.ionRouter.navigateRoot(url, options);
	}

	historyBack(options?: AnimationOptions) {
		this.ionRouter.back(options);
	}
}
