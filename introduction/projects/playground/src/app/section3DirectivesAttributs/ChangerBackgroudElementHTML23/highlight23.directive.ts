import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Directive({
  selector: 'p[highlight23]',
})
export class HighlightDirective23 {
  // <p> devient rose qd la souris survole et redevient blanc quand souris ne survole pas <p>
  // ______________Méthode 1_______________
  /*  constructor(private elementRef: ElementRef<HTMLElement>) {}

  @HostListener('mouseenter')
  onMouseEnter(element: HTMLElement) {
    this.elementRef.nativeElement.style.backgroundColor = 'pink';
  }

  @HostListener('mouseout')
  onMouseOut(element: HTMLElement) {
    this.elementRef.nativeElement.style.backgroundColor = 'White';
  } */

  // ______________Méthode 2_______________
  // Avantage de cette methode pas besoin du constructor +
  // pas besoin de this.elementRef.nativeElement tape element directement
  @HostListener('mouseenter', ['$event.target'])
  onMouseEnter(element: HTMLElement) {
    element.style.backgroundColor = 'pink';
  }

  @HostListener('mouseout', ['$event.target'])
  onMouseOut(element: HTMLElement) {
    element.style.backgroundColor = 'White';
  }
}
