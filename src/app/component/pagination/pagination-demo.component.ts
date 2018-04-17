import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'pagination-demo',
    template: `
        <pagination [totalItems]="totalItems"></pagination>

        <hr />
        <pagination [totalItems]="totalItems" [itemsPerPage]="itemsPerPage" [maxSize]="maxSize"
            previousText="&lsaquo;" nextText="&rsaquo;" firstText="&laquo;" lastText="&raquo;"></pagination>
        
        <hr />
        <pagination [totalItems]="totalItems" [itemsPerPage]="itemsPerPage" [maxSize]="maxSize" [rotate]="true"
            previousText="&lsaquo;" nextText="&rsaquo;" firstText="&laquo;" lastText="&raquo;"></pagination>

        <hr />
        <pagination [totalItems]="totalItems" [itemsPerPage]="itemsPerPage"
            [boundaryLinks]="false" [directionLinks]="true"  [pageLinks]="false" 
            (numPages)="numPages = $event" (pageChanged)="pageChanged($event)"></pagination>
        <pre>Page: {{curPage}} / {{numPages}}</pre>
    `
})
export class PaginationDemoComponent implements OnInit {
    totalItems:number = 250;
    itemsPerPage:number = 15;       
    currentPage:number = 4;      
    maxSize:number = 5; 

    curPage:number = 1;
    numPages:number;

    constructor() { }

    ngOnInit() { }

    pageChanged(event:any){
        this.curPage = event.page;
        console.log(event);
    }
}