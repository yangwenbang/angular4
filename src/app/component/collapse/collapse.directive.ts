import { Directive, ElementRef, Renderer, OnInit, Input } from '@angular/core';

@Directive({selector: '[collapse]'})
export class CollapseDirective  implements OnInit {
    isExpanded:boolean = true;

    @Input() set collapse(value:boolean) {
        this.isExpanded = value;
        this.toggle();
    }
    constructor(private _el:ElementRef, private _renderer:Renderer) { }

    ngOnInit() { }
    /**
     * 判断是否显示或者隐藏
     * 
     * 
     * @memberOf CollapseDirective
     */
    toggle():void {
        if (this.isExpanded) {
            this.hide();
        } else {
            this.show();
        }
    }
    /**
     * 显示
     * 
     * 
     * @memberOf CollapseDirective
     */
    show():void {
        this._renderer.setElementStyle(this._el.nativeElement, 'display', 'none');
    }
    /**
     * 隐藏
     * 
     * 
     * @memberOf CollapseDirective
     */
    hide():void {
        this._renderer.setElementStyle(this._el.nativeElement, 'display', 'block');
    }
}