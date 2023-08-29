import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective23 } from './section3DirectivesAttributs/ChangerBackgroudElement23/highlight23.directive';

@NgModule({
  declarations: [AppComponent, HighlightDirective23],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
