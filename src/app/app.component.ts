import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Propriete title qui ressemble à une variable
  title = 'my-angular';
  nb=0;
// methode aler()ressemble à une fonction
alert(){
   // on peut déclarer des constantes et des variables dans  // les methodes
  const message = 'this is a message ';
  console.log(message); 
  this.nb++;
  console.log('You\'ve clicked:', this.nb +'times');
  alert(message);

}
}

