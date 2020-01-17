import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  //declaracion de las variables
  numero : number;
  incrementa : number;
  sumarRestar : String;
  colorBoton : String;
  
  constructor() { 
    console.log("log del constructor");
    //inicializar Variables
  this.numero = 0;
  this.incrementa = 1;
  this.sumarRestar = "Sumar numero";
  this.colorBoton = "success";

  }
  

  ngOnInit() {
    console.log("log del Init ");
  }

  cambiarNumero =  ()  => {
    
    this.numero += this.incrementa;
    if( this.numero == 0) {
        this.incrementa = 1;
        this.sumarRestar = "Sumar numero";
        this.colorBoton = "success";
      }
    else if(this.numero == 10)  {
      this.incrementa = -1;
      this.sumarRestar = "Restar numero";
      this.colorBoton = "warning";
    }
}

}
