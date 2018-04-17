import { FormControl } from '@angular/forms';

export function skuValidator(control: FormControl): { [s: string]: boolean } {
    // 匹配123开头为true
    if (!control.value.match(/^123/)) {
        return {invalidSku: true};
    }
}
