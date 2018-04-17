import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CollapseModule } from '../collapse';
import { AccordionComponent, AccordionGroupComponent } from './accordion.component';       

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        CollapseModule,
    ],
    exports: [
        AccordionComponent,
        AccordionGroupComponent,
    ],
    declarations: [
        AccordionComponent,
        AccordionGroupComponent
    ],
    providers: [],
})
export class AccordionModule { }
