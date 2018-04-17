import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'collapse-demo',
    template: `
        <button type="button" class="btn btn-primary" (click)="isCollapsed = !isCollapsed">点击</button>
        <hr>
        <div [collapse]="isCollapsed">
            <p>显示的内容</p>
        </div>
    `
})
export class CollapseDemoComponent implements OnInit {
    isCollapsed:boolean = false;

    constructor() { }

    ngOnInit() { }
}