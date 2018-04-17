import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'accordion-demo',
    template: `
        <div class="checkbox">
            <label>
                <input type="checkbox" [(ngModel)]="oneAtATime">
                是否关闭其他项
            </label>
        </div>
        <accordion [closeOthers]="oneAtATime">
            <accordion-group *ngFor="let group of groups" [heading]="group.title" [isOpen]="group.isOpen">
                {{ group?.content }}
            </accordion-group>

            <accordion-group [heading]="groups2.title" #group2>
                <div accordion-heading>
                    <div class="arrows-box">
                        <span class="arrows">
                            <i class="arrow1" [ngClass]="{'bottom-arrow1': !group2?.isOpen, 'top-arrow1': group2?.isOpen}"></i>
                            <i class="arrow2" [ngClass]="{'bottom-arrow2': !group2?.isOpen, 'top-arrow2': group2?.isOpen}"></i>
                        </span>
                    </div>
                </div>
                {{ groups2?.content }}
            </accordion-group>
        </accordion>
    `,
    /**箭头样式 */
    /**或者放在全局样式中共用*/
    styles: [`
        :host /deep/ .arrows-box{
            width: 100%;
            position: relative;
        }
        :host /deep/ .arrows{
            position: absolute;
            right: 20px;
            top: -15px;
            z-index: 2;
        }
        :host /deep/ .bottom-arrow1, :host /deep/ .bottom-arrow2,
        :host /deep/ .top-arrow1, :host /deep/ .top-arrow2{
            width: 0;
            height: 0;
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 5;
            border-left: 10px transparent solid;
            border-right: 10px transparent solid;
            overflow: hidden;
        }
        :host /deep/ .bottom-arrow1{
            top: 1px;
            border-top: 10px #000 solid;
        }
        :host /deep/ .bottom-arrow2{
            border-top: 10px #fff solid;
        }
        :host /deep/ .top-arrow1{
            top: -1px;
            border-bottom: 10px #000 solid;
        }
        :host /deep/ .top-arrow2{
            border-bottom: 10px #fff solid;
        }
    `]
})
export class AccordionDemoComponent implements OnInit {
    public oneAtATime:boolean;     // 是否折叠其他项
    groups:Array<any> = [
        {
            title: '菜单 - 1',
            content: '内容 - 1',
            isOpen: true             // 此项展开
        },
        {
            title: '菜单 - 2',
            content: '内容 - 2'
        }
    ];

    groups2:any = {
            title: '菜单 - 3（带有箭头符号)',
            content: '内容 - 3'
        };

    constructor() { }

    ngOnInit() { }
}