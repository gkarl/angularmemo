import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective26 } from './section3DirectivesAttributs/CycleDeVieNgOnInit26/highlight26.directive';
import { NoOpenDirective } from './section3DirectivesAttributs/Exo27/no-open.directive';
import { ConfirmDirective } from './section3DirectivesAttributs/Exo29/confirm.directive';
import { UserProfileComponent39 } from './section4Composants/PropertyBindingLierUneValeurAUneProprieteElementHtml39/user-profile39.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective26,
    NoOpenDirective,
    ConfirmDirective,
    UserProfileComponent39,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
