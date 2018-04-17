import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, AbstractControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
})
export class FormBuilderComponent implements OnInit {

    myForm: FormGroup;
    sku: AbstractControl;

    constructor(fb: FormBuilder) { 
        this.myForm = fb.group({
            'sku': ['abc']
        });

         //监听sku值改变
        this.sku = this.myForm.controls['sku'];
        this.sku.valueChanges.subscribe(
            (value: string) => {
                console.log('sku changed to:', value);
            }    
        );
        ////监听表单改变
        this.myForm.valueChanges.subscribe(
            (form: any) => {
                console.log('form changed to:', form);
            }
        );
    }

    ngOnInit() { }

    onSubmit(value: string): void{
        console.log('you submitted value: ', value);
    }


}