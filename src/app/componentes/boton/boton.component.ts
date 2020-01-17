import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss']
})
export class BotonComponent implements OnInit {
  //declaracion de las variables
  numero : number;
  
  constructor() { 

    //inicializar Variables
  this.numero = 0;
  
  }
  

  ngOnInit() {
  }

}
