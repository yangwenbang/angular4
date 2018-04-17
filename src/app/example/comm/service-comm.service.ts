import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ServiceCommService {

  // Observable string sources
  private messageSource: any = new Subject<string>();

  // Observable string streams
  message$: any = this.messageSource.asObservable();

  // Service message commands
  sendMessageCommand(message: string) {
    this.messageSource.next(message);
  }
  
}
