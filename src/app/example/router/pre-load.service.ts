import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { HttpService } from '../http/http.service';

@Injectable()
export class PreLoadService implements Resolve<any>{

    constructor(private httpService: HttpService) { }

    /**
     * 预加载
     * 
     * @param {ActivatedRouteSnapshot} route
     * @returns {(Promise<any>|boolean)}
     * 
     * @memberOf PreLoadService
     */
    resolve(route: ActivatedRouteSnapshot): Promise<any>|boolean{
        
        return this.httpService.getDataPromise().then(data => {
              console.log("先执行预加载......");
              if (data) {
                return data;
              } else { 
                return false;
              }
            });
    }
}