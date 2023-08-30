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
  //________________Général___________________
  @HostBinding('style.backgroundColor') //tu va aller prendre mon <p> tu va aller dans son style et tu va aller dans son BackgroundColor
  color = 'transparent'; // qq soit la valeur dans cette variable elle sera aussi donné à style.backgroundColor

  // Utilise si collegue demande à modifier la color juste en ajoutant un attribut sur le HTML et Angular ira chercher la valeur mise à cette attribut
  @Input('background-color') // permet de lui dire que l'info qui devra ce trouver dans backgroundColor je vais aller la chercher dans <p> qui contiend attribut background-color
  backgroundColor = 'pink';

  // Veux que des que souris sort du <p> la couleur du <p> prenne la couleur d'un autre attribut mis sur lui
  @Input('base-color')
  baseColor = 'transparent';

  //________________Méthode___________________
  // Il veux que le <p> avec la base-color violet soit violet des le démarrage de l'appli
  // Cycle de vie => Angular fait un queruSelector sur selector de la directive | Instancie class directive = lance constructor | lance code dans class directive | lance ngOnInit()

  ngOnInit() {
    this.color = this.baseColor;
  }

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
