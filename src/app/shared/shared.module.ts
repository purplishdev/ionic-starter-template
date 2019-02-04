import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

export const COMMON_MODULES: Array<Type<any> | ModuleWithProviders<{}> | any[]> = [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    RouterModule
];

export const COMMON_COMPONENTS: Array<Type<any> | any[]> = [

];

export const COMMON_ENTRY_COMPONENTS: Array<Type<any> | any[]> = [

];

export const COMMON_PIPES: Array<Type<any> | any[]> = [

];

export const COMMON_DIRECTIVES: Array<Type<any> | any[]> = [

];

@NgModule({
    imports: [
        COMMON_MODULES
    ],
    exports: [
        COMMON_MODULES,
        COMMON_COMPONENTS,
        COMMON_DIRECTIVES,
        COMMON_PIPES
    ],
    declarations: [
        COMMON_COMPONENTS,
        COMMON_DIRECTIVES,
        COMMON_PIPES
    ],
    entryComponents: [
        COMMON_ENTRY_COMPONENTS
    ]
})
export class SharedModule {}
