import {Directive, Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ValidationErrors} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {delay, map} from 'rxjs/operators';


@Directive({
  selector: '[appUniqueName]',
  providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueNameDirective, multi: true}]
})
export class UniqueNameDirective implements AsyncValidator {

  constructor(private nameService: NameService) {
  }

  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return control.value && this.nameService.isNameAlreadyTaken(control.value)
      .pipe(map((isTaken: boolean) => isTaken ? {nameIsTaken: true} : null));
  }
}

@Injectable({providedIn: 'root'})
export class NameService {
  isNameAlreadyTaken(name: string): Observable<boolean> {
    return of(name === 'taken').pipe(delay(1000));
  }
}
