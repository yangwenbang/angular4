import { Component, OnInit, Input, Inject, ContentChildren, QueryList, forwardRef } from '@angular/core';

// --------------  accordion-group   -----------      

@Component({
    selector: 'accordion-group',
    template: `
        <div class="panel">
            <div class="panel-heading" (click)="toggleOpen($event)">
                <h4 class="panel-title">
                    <a href>
                        <span *ngIf="heading">{{heading}}</span>
                    </a>
                    <ng-content select="[accordion-heading]"></ng-content>
                </h4>
            </div>
            <div class="panel-collapse" [collapse]="isOpen">
                <div class="panel-body">
                    <ng-content></ng-content>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./accordion-group.css']
})

export class AccordionGroupComponent implements OnInit {
    @Input() heading:string;                // title
    @Input() isOpen:Boolean;                // 默认不展开
    
    // 注入 AccordionComponent
    constructor(@Inject(forwardRef(() => AccordionComponent)) private _accordion: AccordionComponent) { }

    ngOnInit() { }
    /**
     * 判断点击对象是否隐藏或者显示
     * 
     * @param {MouseEvent} event
     * 
     * @memberOf AccordionGroupComponent
     */
    toggleOpen(event:MouseEvent):void {
        event.preventDefault();
        
        // 如果需要折叠其他的，就调用 accordion.setOpen 方法
        if(this._accordion.closeOthers){
            this._accordion.setOpen(this);
        }else{
            this.isOpen = !this.isOpen;
        }
        
    }
}



// --------------  accordion   -----------      

@Component({
    selector: 'accordion',
    template: `<ng-content></ng-content>`
})
export class AccordionComponent implements OnInit {
    @Input() closeOthers:boolean;             // 默认不折叠其他的

    // 获取 AccordionGroupComponent
    @ContentChildren(AccordionGroupComponent) AccordionGroup: QueryList<AccordionGroupComponent>;          

    constructor() { }

    ngOnInit() { }

    /**
     * 判断手风琴展开与折叠
     * 
     * @param {AccordionGroupComponent} group  当前的AccordionGroupComponent
     * 
     * @memberOf AccordionComponent
     */
    setOpen(group: AccordionGroupComponent) {  
        let isOpen =  group.isOpen;
        this.AccordionGroup.toArray().forEach((t) => t.isOpen = false);
        group.isOpen = !isOpen;
    }
}
