import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
} from '@angular/core';

@Directive({
  selector: 'p[highlight22]',
})
export class HighlightDirective22 {
  // ______________Méthode 1_______________
  // 20. Déclarer la directive dans le AppModule
  // Methode impérative pour ajouté un addEeventListener sur notre selector et afficher un des attribut qu'on veux
  /*  constructor(private elementRef: ElementRef<HTMLElement>) {
    console.log(this.elementRef);
    elementRef.nativeElement.addEventListener('mouseenter', ($event) => {
      this.onMouseEnter($event.clientX);
    });
  }

  onMouseEnter(clienX: Number) {
    console.log('on est rentré!', clienX);
  } */

  // _______________Methode 2_______________________
  // Méthode déclarative plus simple apporté par Angular
  constructor(private elementRef: ElementRef<HTMLElement>) {}

  // @HotListener Angular dit je vais faire pour toi le addEventListener,
  // dit moi simplement en argument, qu'elle est l'évenement que tu veux écouter
  // et dans un tableau les attributs de cette évenement que tu veux récupérér
  @HostListener('mouseenter', ['$event.clientX', '$event.clientY'])
  onMouseEnter(clientX: number, clientY: number) {
    // Angular comprend que ces attributs il doit les passer en argument de la methode
    console.log('on est rentré!', clientX, clientY);
  }

  /*   @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: MouseEvent) {
    console.log('on est rentré!', event.clientX);
  }*/
}
