import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
})
export class DirectiveComponent implements OnInit {
  color: string;

  constructor() { }

  ngOnInit() {
  }

}