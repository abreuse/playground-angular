import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
  selector: '[appDifferentNames]',
  providers: [{provide: NG_VALIDATORS, useExisting: DifferentNamesDirective, multi: true}]
})
export class DifferentNamesDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const firstname = control.get('firstname');
    const lastname = control.get('lastname');

    return firstname && lastname && firstname.value.toLowerCase() === lastname.value.toLowerCase() ? {hasSameNames: true} : null;
  }
}
