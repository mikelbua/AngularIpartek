import { Component, OnInit } from '@angular/core';
import {ANIMALES} from '../../animales';
@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {
coche : any;
animales : Array<any>;
busqueda: string;
tipoAnimal : Set<string>;
tipoSeleccionado : string;

  constructor() { 
    console.trace('constructor filtro');
    this.coche ={
          "nombre" : "Audi r8",
          "color" : "rojo",
          "diesel" : false,
          "precio" : 100000.67876
    };
    this.tipoSeleccionado = 'Todos';
    this.animales = ANIMALES;
    this.tipoAnimal = new Set<string>(this.animales.map(el=> el.Tipo));
    console.trace(this.tipoAnimal);
    this.busqueda = '';

  }//constructor

  ngOnInit() {
  }//init

}
