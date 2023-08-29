import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective25 } from './section3DirectivesAttributs/InputRecupererInfoDansAtttributElementHTML25/highlight25.directive';

@NgModule({
  declarations: [AppComponent, HighlightDirective25],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
