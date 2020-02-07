import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {
  colorSeleccionado:any;
  constructor() { 
    console.trace('HelloDirective constructor');
    this.colorSeleccionado = '';
  }

  ngOnInit() {
  }

}
