import { Injectable } from '@angular/core';

@Injectable()
export class LargeService {

    constructor() { }

    run(): void{
        console.log('getting LargeService');
    }
}