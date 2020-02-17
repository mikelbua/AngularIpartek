import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

frutas: any;
aSoloNombres : Array<string>;
fruasAmarillas : Array<string>;
frutasConDescuento : Array<string>;
todosLosColores : Array<string>;


total : number;
totalFrutasAmarillas : number;
totalDescuemto : number;
primeraFrutaVerde : string;

  constructor() {

    this.total = 0;
    this.totalDescuemto=0;

    this.frutas = [
      {'nombre':'fresa','precio':2.45 , 'descuento' : 10 , 'color' : ['roja']},
      {'nombre':'pera','precio':3.55 ,'descuento' : 2, 'color' : ['amarillo','verde','roja']},
      {'nombre':'manzana','precio':1.99, 'descuento' : 0 , 'color' : ['amarillo','verde']}
    ];
    console.trace('ArraysComponent constructor');

    
   }

  ngOnInit() {
    console.trace('ArraysComponent ngOnInit');

    
      /*
      for (let i=0;i < this.frutas.length;i++){
        
        this.total += this.frutas[i].precio;
      }
      /*this.frutas.forEach(element => {
        this.total += this.frutas.precio;
      });
      */

      //Modo extendido para poder depurar.
      this.total = this.frutas.map( el =>{
        console.debug( el );
        return el;
      }).reduce((previus,current) =>{
        console.debug( previus,current );
        return previus.precio + current.precio;
      });
      
      
      this.aSoloNombres  = this.frutas.map(el=> el.nombre);
      this.total = this.frutas.map(el => el.precio).reduce((c,p)=> c + p);
      this.totalDescuemto = this.frutas.reduce((p , c ) =>(p + (c.precio - ((c.precio * c.descuento)/100) ) ),0 );
      
      this.frutasConDescuento = this.frutas.filter(el => (el.descuento > 0)).map(el => el.nombre);
      this.fruasAmarillas = this.frutas.filter(el => el.color.includes('amarillo')).map(el => el.nombre);

      //Precio total de frutas amarilas 
      this.totalFrutasAmarillas = this.frutas.filter(el => el.color.includes('amarillo')).reduce((p , c ) =>(p + (c.precio - ((c.precio * c.descuento)/100) ) ),0 );
      //Buscar primera fruta verde
      this.primeraFrutaVerde = this.frutas.find(el => el.color.includes('verde'));

      //Buscar todos los colores de las frutas frutas[].colore[]      
      this.todosLosColores = this.frutas.reduce( (p, c, i, a) => {
        console.debug( ' reduce ' + p, c, i,a);
            return p.concat(c.color);
        }, [] ).filter( (el, index, array) => {
            console.debug('Filtro' + el, index, array);
            return array.indexOf(el) === index;
          });

      }//ngOnInit
  }//class
