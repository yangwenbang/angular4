import { Directive, OnInit, Output, EventEmitter, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[modal]',
    exportAs: 'modal'
})
export class ModelDirective implements OnInit {
    @Output() onShow: EventEmitter<any> = new EventEmitter();
    @Output() onHide: EventEmitter<any> = new EventEmitter();

    constructor(private _el: ElementRef, private _renderer: Renderer) { }

    ngOnInit() { }

    /**
     * 监听点击隐藏模态框
     * 
     * 
     * @memberOf ModelDirective
     */
    @HostListener('click', ['$event'])
    onClick(event: any): void {
        if (event.target !== this._el.nativeElement) return;
        this.hide();
    }

    /**
     * 监听键盘 ESC 隐藏模态框
     * 
     * 
     * @memberOf ModelDirective
     */
    @HostListener('keydown.esc')
    onEsc(): void {
        this.hide();
    }

    /**
     * 
     * 显示模态框
     * 
     * @memberOf ModelDirective
     */
    show(): void {
        this.onShow.emit(this);
        this._renderer.setElementStyle(this._el.nativeElement, 'display', 'block');
        this._renderer.setElementStyle(document.body, 'overflow', 'hidden');
        setTimeout(() =>{
            this._renderer.setElementClass(this._el.nativeElement, 'in', true);
        },100);
        this._el.nativeElement.focus();
    }

    /**
     * 
     * 隐藏模态框
     * 
     * @memberOf ModelDirective
     */
    hide(): void {
        this.onHide.emit(this);
        this._renderer.setElementStyle(this._el.nativeElement, 'display', 'none');
        this._renderer.setElementStyle(document.body, 'overflow', 'inherit');
        this._renderer.setElementClass(this._el.nativeElement, 'in', false);
    }
}