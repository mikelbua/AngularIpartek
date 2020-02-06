import { Component, OnInit } from '@angular/core';
import {RECETAS} from '../../recetas';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.scss']
})
export class RecetasComponent implements OnInit {

  recetas : Array<any>;
  receta : any;
  ingredientes : Array<string>;

  constructor() {
    this.recetas = RECETAS;
    this.receta = this.recetas[0];

   }//CONSTRUCTOR

  ngOnInit() {

  }//INIT

  detalleReceta(r:any){
    this.receta = r;
  }

}//CLASS
