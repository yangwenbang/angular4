import { SmallService } from './small.service';
import { LargeService } from './large.service';

export class ViewportService {

    constructor() { }

    //根据宽度创建服务
    determineService(): any {
        let w: number = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        if (w < 800)  return new SmallService();
        
        return new LargeService();
    }
}