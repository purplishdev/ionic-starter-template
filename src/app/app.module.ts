import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

@NgModule({
	imports: [
		IonicModule.forRoot(),
		CoreModule,
		SharedModule,
		AppRoutingModule
	],
	declarations: [AppComponent, HelloWorldComponent],
	bootstrap: [AppComponent],
	providers: [
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	]
})
export class AppModule {}
