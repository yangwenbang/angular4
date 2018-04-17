import { NgModule } from '@angular/core';

import { BaiduMapService } from './baiduMap.service'
import { LoadScriptService } from '../loadScript'

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        BaiduMapService,
        LoadScriptService,
    ],
})
export class BaiduMapModule { }
