import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  titulo : string;
  numeroClicks : number;
  visible = false;
  claseSeleccionada : string;
  jugador : string;

  constructor() {
    console.trace('constructor');
    this.titulo = "Inicio";
    this.numeroClicks = 0;
    this.claseSeleccionada = '';
    this.jugador = '';
   }//constructor

  ngOnInit() {
    console.trace('init');
  }//init

  contarClicks(){
    console.trace('contarClicks');
    this.numeroClicks ++;
  }//contarClicks

  
   
  decirAdios() {
    console.trace('decirAdios');
    this.visible = true;
  }//decirAdios
    
  

}//component


