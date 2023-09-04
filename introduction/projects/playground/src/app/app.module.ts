import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective26 } from './section3DirectivesAttributs/CycleDeVieNgOnInit26/highlight26.directive';
import { NoOpenDirective } from './section3DirectivesAttributs/Exo27/no-open.directive';
import { ConfirmDirective } from './section3DirectivesAttributs/Exo29/confirm.directive';
import { UserProfileComponent } from './section4Composants/CréerUneDirectiveUserProfile35/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective26,
    NoOpenDirective,
    ConfirmDirective,
    UserProfileComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
