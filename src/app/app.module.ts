import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IdentityFormComponent} from './identity-form/identity-form.component';
import {FormsModule} from '@angular/forms';
import {ForbiddenNameDirective} from './directive/forbidden-name.directive';
import {DifferentNamesDirective} from './directive/different-names.directive';
import {NameService, UniqueNameDirective} from './directive/unique-name.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    IdentityFormComponent,
    ForbiddenNameDirective,
    DifferentNamesDirective,
    UniqueNameDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [NameService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
