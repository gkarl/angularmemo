import { Directive } from '@angular/core';
// déclare cette class comme étant une directive
// on lui dit sur tous les p qui on l'attribut highlight19 on lui greffe le code de cette class
@Directive({
  selector: 'p[highlight19]',
})
export class HighlightDirective19 {}
