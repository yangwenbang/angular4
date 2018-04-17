import { Injectable } from '@angular/core';

@Injectable()
export class LoadScriptService {

    constructor() { }

    load(src: string):Promise<any>{
        return new Promise((resolve, reject) => {

            let script = document.createElement('script');

            if (!src) {
                new Error('src');
            }
            script.src = src;
            document.querySelector('head').appendChild(script);

            script.onload = function(){
                resolve();
                script.remove()
            }

            script.onerror = function() {
                reject()
            }

        })



    }
}