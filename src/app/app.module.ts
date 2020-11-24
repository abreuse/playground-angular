import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IdentityFormComponent} from './template-driven-form/identity-form/identity-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ForbiddenNameDirective} from './template-driven-form/directive/forbidden-name.directive';
import {DifferentNamesDirective} from './template-driven-form/directive/different-names.directive';
import {NameService, UniqueNameDirective} from './template-driven-form/directive/unique-name.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { PetFormComponent } from './reactive-form/pet-form/pet-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IdentityFormComponent,
    ForbiddenNameDirective,
    DifferentNamesDirective,
    UniqueNameDirective,
    PetFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
