import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {

  coches : Array<any>
  constructor() { 
    this.coches =[ 
      {
        "nombre":"seat",
        "precio" : 200
      },
      {
        "nombre":"citroen",
        "precio" : 399
      },
      {
        "nombre":"ferrari",
        "precio" : 2000
      }  
      ];
    
  }//constructor

  ngOnInit() {
  }//init

}
