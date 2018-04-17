import { Component, OnInit, Input, AfterContentInit, ContentChildren, QueryList } from '@angular/core';

// -----------------  tab  ------------

@Component({
    selector: 'tab',
    template: `
        <div class="tab-content">
          <div class="tab-pane" [class.active]="active">
            <ng-content></ng-content>
          </div>
        </div>
    `,
    styleUrls: ['./tab.css']
})
export class TabComponent implements OnInit {
    @Input('heading') heading:string; 
    active: boolean = false;    

    constructor() { }

    ngOnInit() { }
}


// -----------------  tabset  ------------

@Component({
    selector: 'tabset',
    template: `
        <ul class="nav nav-tabs">
            <li *ngFor="let tab of tabs" [class.active]="tab.active" (click)="setActive(tab)">
                <a class="item">{{ tab.heading }}</a>
            </li>
        </ul>
        <ng-content></ng-content>
    `,
    styleUrls: ['./tabset.css']
})
export class TabsetComponent implements AfterContentInit {
    @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;     // 获取 TabComponent

    constructor() { }

    ngAfterContentInit() { 
        setTimeout(() => {
            this.tabs.toArray()[0].active = true;   // TabComponent active 默认第一个
        }, 0);
    }

    /**
     * 点击当前 tab，并更改 active 状态
     * 
     * @param {TabComponent} tab     TabComponent
     * 
     * @memberOf TabsetComponent
     */
    setActive(tab: TabComponent) {   
        this.tabs.toArray().forEach((t) => t.active = false);
        tab.active = true;
    }
}