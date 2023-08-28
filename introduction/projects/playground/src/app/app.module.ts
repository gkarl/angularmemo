import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective19 } from './section3DirectivesAttributs/CreateDirective19/highlight.directive';
import { HighlightDirective22 } from './section3DirectivesAttributs/HostListener22/highlight22.directive';

@NgModule({
  declarations: [AppComponent, HighlightDirective19, HighlightDirective22],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
