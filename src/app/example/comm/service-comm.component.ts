import { Component, OnInit } from '@angular/core';

import { ServiceCommService } from './service-comm.service';

@Component({
    selector: 'app-service-comm',
    template: `
        <h2>Demo Service</h2>
        
        <input name="textInput" #textInput/>
        <button (click)="send(textInput.value)">发送信息</button>

        <h4>接受信息</h4> 
        <pre>{{message}}</pre> 
    `,
    providers: [ServiceCommService]
})
export class ServiceCommComponent implements OnInit {
    message: string;

    constructor(private serviceCommService: ServiceCommService) {
        /**
         * 接受
         */
         serviceCommService.message$.subscribe(
          (message: string) => this.message = message
        );
     }

    ngOnInit() { }

    /**
     * 发送
     * 
     * 
     * @memberOf ServiceCommComponent
     */
    send(textInput: string){
        this.serviceCommService.sendMessageCommand(textInput);
    }
}