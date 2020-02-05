import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.scss']
})
export class JuegoComponent implements OnInit {

  jugador : string;
  enJuego: boolean;
  numeroClicks : number;
  miMapa : Map<string,number>;

  constructor() {
    console.trace('constructor');
    this.jugador = '';
    this.enJuego = false;
    this.jugador = '';
    this.numeroClicks = 0;
    this.miMapa = new Map();
}//construct

  ngOnInit() {
    console.trace('init');

  }//init

  jugarClcik(){
    console.trace('Funcion jugar');
    console.trace('Nonmbre del jugador : '+ this.jugador);
    setTimeout(() => {
      this.numeroClicks = 0;
      this.enJuego = true;
    }, 1000);
    setTimeout(() => {
      this.enJuego = false;
      this.miMapa.set(this.jugador, this.numeroClicks);
      this.jugador = '';
    }, 3000);

  }//jugarClick

  contarClicks(){
    console.trace('contarClicks');
    this.numeroClicks ++;
  }//contarClicks


}
