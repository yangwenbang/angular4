import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { HttpService } from './http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  providers: [HttpService]
})
export class HttpComponent implements OnInit {
  data: any;

  constructor(private http: Http, private httpService: HttpService) { }

  ngOnInit() {
  }

  makeRequest(): void{
    //  this.httpService.getDataPromise()
    //       .then(
    //           (res: Response) =>  this.data = res,
    //           (error: any) => console.log(error)
    //       );

    this.httpService.getData()
          .subscribe(
              (res: Response) =>  this.data = res,
              (error: any) => console.log(error)
          );
  }

}