import { Component, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/RX'; 

import { HttpService } from './http.service';

/**
 * 输入框
 * 
 * @export
 * @class SearchBoxComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'search-input',
    template: `
        <input type="text" class="form-control" placeholder="Search" #input autofocus (change)="search(input.value)">
    `,
    providers: [HttpService]
})
export class SearchInputComponent implements OnInit {
    @Output() results: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

    constructor(
        private httpService: HttpService,
        private el: ElementRef
    ) { }

    ngOnInit() { 
        //将keyup事件放入Observable stream
        // Observable.fromEvent(this.el.nativeElement, 'keyup')
        // .map((e: any) => e.target.value)      //获取input的值
        // .filter((text: string) => text.length > 0)   //过滤input值为空的情况
        // .debounceTime(500)
        // .do(() => {})       
        // .map((query: string) => this.httpService.search(query))
        // .switch()
        // .subscribe(              
        //     (results: Array<any>) => {    //on sucesss
        //         this.results.next(results);
        //     },
        //     (err: any) => {       // on error
        //         console.log(err);
        //     },
        //     () => {          // on completion
        //     }
        // )
    }

    search(value: string){
        this.httpService.search(value)
            .subscribe((results: Array<any>) => {
                this.results.next(results);
            });
    }
}


/**
 * 数据显示
 * 
 * @export
 * @class YoutubeSearchDemoComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'youtube-search',
    template: `
        <div class='container'>
            <div class="row">
                <div class="input-group input-group-lg col-md-12">
                    <search-input (results)="updateResults($event)" ></search-input>
                </div>
            </div>
        
            <div class="row">
                <pre>{{results | json}}</pre>
            </div>
        </div>
    `
}) 
export class YoutubeSearchComponent implements OnInit {
    results: Array<any>;

    constructor() { }

    ngOnInit() { }

    updateResults(results: Array<any>): void{
        this.results = results;
    }
}