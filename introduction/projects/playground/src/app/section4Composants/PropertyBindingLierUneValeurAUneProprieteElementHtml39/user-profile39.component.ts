import {
  Component,
  Directive,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
//___________________Lesson36________________________
// Meilleur methode pour injecter du HTML
@Component({
  // @Component est comme @Directive mais a besoin d'un template
  selector: 'div[user-profile39]', // On veux parler à toute les <div> qui ont l'attribut user-profile
  template: `
    <p>
      <!--_______________Lesson 37___________________-->

      Valeur Attributs dans app.component @Input:
      <strong> {{ firstname }} {{ lastName }} </strong>
      <!--{{ }} permet de faire de l'interpolation de récupérer la valeur d'1 variable ou d'1 méthode et de l'afficher dans le template -->
      Métier : <strong> {{ job }} </strong>
      <br />
      Opération mathématique : {{ 3 * 1000 }} Euro
      <br />
      Ternaire : {{ 5 === 5 ? 'égalité' : 'différent' }}
      <br />
      Appel de méthode : {{ getfctTest() }}
      <!---->
    </p>

    <!--_______________Lesson 38___________________-->

    <h6>Lesson 38</h6>
    <strong> {{ firstname | uppercase }} </strong>
    <!-- | => pipe va devoir travailler sur la valeur que vous lui donnez pour l'afficher à la fin d'une certaine façon Ex ici affiche la variable en majuscule dans le template -->
    Gagne
    {{ revenue | currency : 'EUR' : 'symbol' }}
    <!--'EURO' => parametre de currency celui que je veut utiliser c'est Euro | 'symbol' => 2em parametre symbole €-->

    <!--_______________Lesson 39**___________________-->

    <img [src]="avatar" alt="" />
    <!--**  [ ] => autour d'un attribut de balise ce que vous donné entre gillemet " " sera interprété comme du Javascript  | accepte Ternaire, variable, fct -->
    <!-- **on a vraiment l'assignation d'1 variable à une propriété de ma balise -->
  `,
})
export class UserProfileComponent39 {
  @Input('first-name') // Aller chercher les valeurs sur le template de la propriété 'first-name' et valorise la variable en dessous
  firstname = '';

  @Input('last-name') // idem
  lastName = ''; // idem (il ne marque pas job car la variable et la propriété on le meme nom)

  @Input()
  job = '';

  revenue = 1200;

  avatar =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Red_sea_passage.jpg/250px-Red_sea_passage.jpg';

  //_______________Lesson 35___________________

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
