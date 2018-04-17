import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabComponent, TabsetComponent }   from './tab.component';  

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [
        TabComponent,
        TabsetComponent,
    ],
    declarations: [
        TabComponent,
        TabsetComponent
    ],
    providers: [],
})
export class TabModule { }
