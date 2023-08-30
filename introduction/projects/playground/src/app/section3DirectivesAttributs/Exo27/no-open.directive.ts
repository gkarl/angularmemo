import { parseHostBindings } from '@angular/compiler';
import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'a[no-open]',
})
export class NoOpenDirective {
  // //Angular lie <a> à la fct il l'execute quand event click
  @HostListener('click', ['$event']) // qd click Angular passe à la fct l'event du click en paramétre de la fct
  OnMouseClick(event: Event) {
    event.preventDefault(); // on dit à <a> de ne pas se lancer // Rq on aurait pu mettre return false à la place
    console.log('essaye ouverture lien');
  }
}
