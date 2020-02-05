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
  constructor() { 
    console.trace('constructor filtro');
    this.coche ={
          "nombre" : "Audi r8",
          "color" : "rojo",
          "diesel" : false,
          "precio" : 100000.67876
    };
    this.animales = ANIMALES;
    this.busqueda = '';

  }//constructor

  ngOnInit() {
  }//init

}
