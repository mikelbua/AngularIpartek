import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Output() pasameFrutaEvento = new EventEmitter;
  @Input() frutas : Array<Fruta>;

  frutaSeleccionada : Fruta;

  constructor() {
    this.frutas = new Array<Fruta>();

    this.frutas.push(new Fruta('Manzana'))
    this.frutas.push(new Fruta('Pera'))
    this.frutas.push(new Fruta('Aguace'))

    this.frutaSeleccionada = new Fruta();

   }//component

  ngOnInit() {
  }//init

  seleccionar(fruta : Fruta){
    console.debug('click fruta %o ' + fruta);
    this.frutaSeleccionada = fruta;
  }

  lanzar(event,fruta){

    //usamon el metodo emit
    this.frutaSeleccionada = fruta;
    this.pasameFrutaEvento.emit(fruta);
  }

}
