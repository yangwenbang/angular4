import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core'; 

@Directive({
    selector: '[myHighlight]'
})
export class HighlightDirective {
  private _defaultColor = 'red';              // 默认颜色

  constructor(private el: ElementRef, private renderer: Renderer) { }

  @Input('myHighlight') highlightColor: string;

  // 设置默认颜色
  @Input() set defaultColor(colorName: string){
    this._defaultColor = colorName || this._defaultColor;
  }

  // 监听事件
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this._defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  // 设置背景颜色
  private highlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
