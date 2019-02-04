import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, Provider, SkipSelf, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

export const CORE_MODULES: Array<Type<any> | ModuleWithProviders<{}> | any[]> = [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
];

export const COMMON_GUARDS: Provider[] = [

];

export const COMMON_SERVICES: Provider[] = [
    StatusBar,
    SplashScreen
];

@NgModule({
    imports: [
        CORE_MODULES
    ],
    exports: [
		CORE_MODULES
    ],
    providers: [
        COMMON_SERVICES,
        COMMON_GUARDS
    ]
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
      }
    }
}
