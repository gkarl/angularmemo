import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective26 } from './section3DirectivesAttributs/CycleDeVieNgOnInit26/highlight26.directive';
import { NoOpenDirective } from './section3DirectivesAttributs/Exo27/no-open.directive';

@NgModule({
  declarations: [AppComponent, HighlightDirective26, NoOpenDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
