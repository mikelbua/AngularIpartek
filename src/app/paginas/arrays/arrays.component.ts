import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

frutas: any;
total : number;

  constructor() {
    this.frutas = [
      {'nombre':'fresa','precio':2.45},
      {'nombre':'manzana','precio':1.99},
      {'nombre':'pera','precio':3.55}
    ];
    console.trace('ArraysComponent constructor');
    
    this.total = 0;

    
   }

  ngOnInit() {
    console.trace('ArraysComponent ngOnInit');
  }

}
