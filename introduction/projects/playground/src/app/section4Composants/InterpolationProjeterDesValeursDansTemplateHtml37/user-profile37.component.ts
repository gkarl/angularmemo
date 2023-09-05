import {
  Component,
  Directive,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  // Meilleur methode pour injecter du HTML
  // @Component est comme @Directive mais a besoin d'un template
  //** {{ }} permet de faire de l'interpolation de récupérer la valeur d'1 variable ou d'1 méthode et de l'afficher dans le template
  selector: 'div[user-profile37]', // On veux parler à toute les <div> qui ont l'attribut user-profile
  template: `
    <p>
      Valeur Attributs dans app.component @Input:
      <strong> {{ firstname }} {{ lastName }} </strong>
      Métier : <strong> {{ job }} </strong>
      <br />
      Opération mathématique : {{ 3 * 1000 }} Euro
      <br />
      Ternaire : {{ 5 === 5 ? 'égalité' : 'différent' }}
      <br />
      Appel de méthode : {{ getfctTest() }}
    </p>
  `,
})
export class UserProfileComponent37 {
  @Input('first-name') // Aller chercher les valeurs sur le template de la propriété 'first-name' et valorise la variable en dessous
  firstname = '';
  @Input('last-name') // idem
  lastName = ''; // idem (il ne marque pas job car la variable et la propriété on le meme nom)
  @Input()
  job = '';

  constructor(private elementRef: ElementRef<HTMLElement>) {} // Recupérer un ElementRef cad la <div> sur laquel je suis en train de travailler.

  // Trop impératif trop compliqué pour faire ça Angular propose un meilleur outil @Component
  /*  ngOnInit() { 
    // Dans le cycle de vie Angular cette fct sera appelé uniquement aprés le constructor et les @  dont on pourra utiliser les variable qui auront été valorisé par les attributs dans le Template
    // je parle à mon élémentRef, dedans je peut parler à l'élément HTML qui est ciblé (nativeElement) pour lui injecter du HTML (innerHTML)
    this.elementRef.nativeElement.innerHTML = `  
     <h3>${this.firstname} ${this.lastName}</h3>
     Métier : <strong>${this.job}</strong>
     `;
  } */

  getfctTest() {
    return 'Toto';
  }
}
