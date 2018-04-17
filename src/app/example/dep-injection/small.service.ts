import { Injectable } from '@angular/core';

@Injectable()
export class SmallService {

    constructor() { }

    run(): void{
        console.log('getting SmallService');
    }
}