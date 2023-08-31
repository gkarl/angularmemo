import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'a[confirm]',
})
export class ConfirmDirective {
  @Input('confirm-message') //si tu trouve grace à @Input un attribut en HTML qui s'appel 'confirm-message' prend sa valeur pour la variable message
  message = 'Etes tu sure!';

  @HostListener('click', ['$event'])
  onClickLink(event: Event) {
    const confirmation = window.confirm(this.message); // ça lance une popup avec notre message si ok recurére true et on part sur le lien si annuler on récupére false

    if (!confirmation) {
      // si confirmation est à false
      event.preventDefault(); // ça empéche le lien <a> de marcher
    }
    return true;
  } // Rq on peut remplacer tout le contenu de la methode par window.confirm(this.message); si fct return false @HostListener lance un event.preventDefault();
}
