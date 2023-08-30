import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: 'p[highlight26]',
})
export class HighlightDirective26 {
  @HostBinding('style.backgroundColor') //tu va aller prendre mon <p> tu va aller dans son style et tu va aller dans son BackgroundColor
  color = 'transparent'; // qq soit la valeur dans cette variable elle sera aussi donné à style.backgroundColor

  // ______________Méthode4_______________
  /* backgroundColor = 'pink';

  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.backgroundColor =
      elementRef.nativeElement.getAttribute('background-Color') || 'pink'; // donne moi la valeur qui est dans l'attribut background-Color qui est sur <p> || si pas de valeur met pink
  } */

  // ______________Méthode5_______________
  // Utilise si collegue demande à modifier la color juste en ajoutant un attribut sur le HTML et Angular ira chercher la valeur mise à cette attribut
  @Input('background-color') // permet de lui dire que l'info qui devra ce trouver dans backgroundColor je vais aller la chercher dans <p> qui contiend attribut background-color
  backgroundColor = 'pink';

  //____________________Methode6______________
  // Veux que des que souris sort du <p> la couleur du <p> prenne la couleur d'un autre attribut mis sur lui
  @Input('base-color')
  baseColor = 'transparent';

  //________________Général___________________
  @HostListener('mouseenter')
  onMouseEnter() {
    this.color = this.backgroundColor;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.color = this.baseColor;
  }
}
