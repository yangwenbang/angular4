import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import { skuValidator } from './custom-validations';  //自定义验证

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
})
export class ValidationComponent implements OnInit {
    myForm: FormGroup;
    sku: AbstractControl;

    constructor(fb:FormBuilder) { 
        this.myForm = fb.group({
            'sku': ['', [              // 合并验证
                Validators.required,
                skuValidator
            ]]
        });

        // 验证字段
        this.sku = this.myForm.controls['sku'];
    }

    ngOnInit() { }

    onSubmit(value: string): void{
        console.log('you submitted value: ', value);
    }

}