import { Component, OnInit } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';



@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss']
})
export class ComprasComponent implements OnInit {

frutas : Array<Fruta>;
frutaSeleccionada : Fruta;

  constructor() { 
    this.frutas = [];
    this.frutaSeleccionada = new Fruta();

    this.frutas.push(new Fruta('Manzana'))
    this.frutas.push(new Fruta('Pera'))
    this.frutas.push(new Fruta('Aguace'))
  }

  ngOnInit() {
  }

  recogerEvento(event){
    console.debug('Soy componente padre (compras.component.ts) y recivo event %o ' + event);
    this.frutaSeleccionada = event;
  }

}
