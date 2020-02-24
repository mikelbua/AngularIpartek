import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.scss']
})
export class SaludarComponent implements OnInit {

nombre:string;

  constructor(private route: ActivatedRoute) {
    console.trace('Constructor Saludar');
    this.nombre = '';
    
      
   }//constructor

  ngOnInit() {
    this.route.params.subscribe(el => this.nombre = el.pNombre);
  }//init

}//class
