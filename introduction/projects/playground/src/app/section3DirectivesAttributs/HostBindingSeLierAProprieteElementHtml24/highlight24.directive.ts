import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: 'p[highlight24]',
})
export class HighlightDirective24 {
  // ______________Méthode3_______________
  // Une autre façon de faire plus simplement e qu'on a vu a la lesson 23
  // HostBing  expliquer à Angular cette propriété color devra etre lié de façon permanente à une propriété de l'élément HTML <p> sur lequel je suis
  @HostBinding('style.backgroundColor') //tu va aller prendre mon <p> tu va aller dans son style et tu va aller dans son BackgroundColor
  color = 'transparent'; // qq soit la valeur dans cette variable elle sera aussi donné à style.backgroundColor
  @HostListener('mouseenter')
  onMouseEnter() {
    // je n'ai meme pas besoin qu'il y ai des parametre particulier
    // element.style.backgroundColor = 'pink';
    this.color = 'pink'; // ça revient au meme
  }

  @HostListener('mouseout')
  onMouseOut() {
    // element.style.backgroundColor = 'transparent';
    this.color = 'transparent'; // si color change Angular le détect et update on appel ça la détection de changement
  }
}
