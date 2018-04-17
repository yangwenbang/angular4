import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface PageChangedEvent {
  itemsPerPage:number;
  page:number;
}

@Component({
    selector: 'pagination',
    template: `
        <ul class="pagination">
            <li *ngIf="boundaryLinks" class="pagination-first page-item" [class.disabled]="page === 1">
                <a class="page-link" href (click)="selectPage(1, $event)" [innerHTML]="firstText"></a>
            </li>
            <li *ngIf="directionLinks" class="pagination-prev page-item"  [class.disabled]="page === 1">
                <a class="page-link" href (click)="selectPage(page - 1, $event)" [innerHTML]="previousText"></a>
            </li>
            <li *ngFor="let pg of pages" class="pagination-page page-item" [class.active]="pg.active">
                <a class="page-link" href (click)="selectPage(pg.number, $event)" [innerHTML]="pg.text"></a>
            </li>
            <li *ngIf="directionLinks" class="pagination-next page-item" [class.disabled]="page === totalPages">
                <a class="page-link" href (click)="selectPage(page + 1, $event)" [innerHTML]="nextText"></a>
            </li>
            <li *ngIf="boundaryLinks" class="pagination-last page-item" [class.disabled]="page === totalPages">
                <a class="page-link" href (click)="selectPage(totalPages, $event)" [innerHTML]="lastText"></a>
            </li>
        </ul>
    `,
    styleUrls: ['./pagination.css']
})
export class PaginationComponent implements OnInit {
    pages:any[];                              // 按钮显示页码的数组
    protected _itemsPerPage:number = 10;      // 每页条数
    protected _totalItems:number;             // 总条数
    protected _totalPages:number;             // 总页数
    protected _page:number = 1;                   // 当前页

    @Input() firstText:string = '首页';          // 首页按钮文本
    @Input() previousText:string = '上一页';     // 上一页按钮文本
    @Input() nextText:string = '下一页';         // 下一页按钮文本
    @Input() lastText:string = '尾页' ;          // 尾页按钮文本
    @Input() maxSize: number = void 0;           // 显示最多的个数
    @Input() rotate: boolean;                    // 页码是否显示在中间
    @Input() boundaryLinks:boolean = true;       // 是否隐藏首页和尾页的按钮
    @Input() directionLinks: boolean = true;     // 是否隐藏上一页和下一页的按钮
    @Input() pageLinks: boolean = true;          // 是否隐藏页码的按钮

    @Output() numPages: EventEmitter<number> = new EventEmitter<number>();      // 获取总页数的方法
    @Output() pageChanged:EventEmitter<PageChangedEvent> = new EventEmitter<PageChangedEvent>();          // 

    @Input()
    get itemsPerPage():number {
        return this._itemsPerPage;
    }

    set itemsPerPage(v:number) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }

    @Input()
    get totalItems():number {
        return this._totalItems;
    }

    set totalItems(v:number) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }

    get totalPages():number {
        return this._totalPages;
    }

    set totalPages(v:number) {
        this._totalPages = v;
        this.numPages.emit(v);
    }

    get page():number {
        return this._page;
    }

    set page(value:number) {
        const _previous = this._page;
        this._page = (value > this.totalPages) ? this.totalPages : (value || 1);

        if (_previous === this._page || typeof _previous === 'undefined') {
            return;
        }

        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }
    constructor() { }

    ngOnInit() {
        this.totalPages = this.calculateTotalPages();
        this.pages = this.getPages(this.page, this.totalPages);
    }


    /**
     * 计算总页数
     * 
     * @protected
     * @returns {number}
     * 
     * @memberOf PaginationComponent
     */
    protected calculateTotalPages():number {
        let totalPages = this.itemsPerPage < 1 ? 1 : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }

    /**
     * 获取需要显示的按钮页码
     * 
     * @param {number} currentPage       当前页
     * @param {number} totalPages        总页数
     * @returns {any[]}
     * 
     * @memberOf PaginationComponent
     */
    getPages(currentPage:number, totalPages:number):any[] {
        if(!this.pageLinks) return [];
        let pages:any[] = [];

        let startPage = 1;                       // 默认第一个按钮为 1
        let endPage = totalPages;                // 默认最后一个按钮为总页数
        let isMaxSized = this.maxSize < totalPages;        // 判断是否显示的按钮个数小于总页数

        // 设置显示的 startPage 与 endPage
        if (isMaxSized) {
            if (this.rotate) {
                // 当前页显示在中间
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;

                // 超出限制
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            } else {
                startPage = ((Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize) + 1;

                // 超出限制
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }

        // 创建要显示的 page 数组对象
        for (let num = startPage; num <= endPage; num++) {
            let page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }

        // 设置 ... 按钮，并放入 page 数组对象中
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                let previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }

            if (endPage < totalPages) {
                let nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }

        return pages;
    }

    /**
     * 创建 page 对象，用于 template
     * 
     * @protected
     * @param {number} num               // 页码
     * @param {string} text              // 文本
     * @param {boolean} active           // 是否为当前页
     * @returns {{number:number, text:string, active:boolean}}
     * 
     * @memberOf PaginationComponent
     */
    protected makePage(num:number, text:string, active:boolean):{number:number, text:string, active:boolean} {
        return { text, number:num, active };
    }

    /**
     * 点击选择当前页码
     * 
     * @param {number} page          // 选择的页码
     * @param {MouseEvent} [event]   // event
     * 
     * @memberOf PaginationComponent
     */
    selectPage(page:number, event?:MouseEvent):void {
        if (event) {
            event.preventDefault();
        }

        if (event && event.target) {
            let target:any = event.target;
            target.blur();
        }
        this.page = page;
        this.pages = this.getPages(this.page, this.totalPages);
    }


}