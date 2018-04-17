import { Component, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {

    sku: AbstractControl;

    constructor() { }

    ngOnInit() { }

    onSubmit(value: string): void{
        console.log('you submitted value: ', value);
    }

}