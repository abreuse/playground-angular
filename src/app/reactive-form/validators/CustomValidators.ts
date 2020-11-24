import {AbstractControl, ValidatorFn} from '@angular/forms';

export class CustomValidators {

  static forbiddenName(forbiddenName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      return forbiddenName === control.value ? {forbiddenName: true} : null;
    };
  }
}
