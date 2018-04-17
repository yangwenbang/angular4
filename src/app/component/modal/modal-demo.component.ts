import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'modal-demo',
    template: `
        <button class="btn btn-primary" (click)="lgModal.show()">模态框 Large</button>
        <div modal #lgModal="modal" class="modal fade" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" (click)="lgModal.hide()">
                            <span>&times;</span>
                        </button>
                        <h4 class="modal-title">标题</h4>
                    </div>
                    <div class="modal-body">
                        内容 ......
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" (click)="lgModal.hide()">关闭</button>
                    </div>
                </div>
            </div>
        </div>

        <button class="btn btn-primary" (click)="smModal.show()">模态框 Small</button>
        <div modal #smModal="modal" class="modal fade none" tabindex="-1">
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" (click)="smModal.hide()">
                            <span>&times;</span>
                        </button>
                        <h4 class="modal-title">标题</h4>
                    </div>
                    <div class="modal-body">
                        内容 ......
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" (click)="smModal.hide()">关闭</button>
                    </div>
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./modal.css']
})
export class ModalDemoComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}