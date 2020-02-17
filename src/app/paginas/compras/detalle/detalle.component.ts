import { Component, OnInit, Input } from '@angular/core';
import { Fruta } from 'src/app/model/frutas.model';
import { Color } from 'src/app/model/color';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  @Input() fruta:Fruta;

  color : Color;

  constructor() {
    this.color.nombre='amarillo';
    this.color.value = '#ffff00';

    this.fruta.nombre = 'banana';
    this.fruta.precio = 2.45;
    this.fruta.colores[0] = this.color;

   }

  ngOnInit() {
  }

}
