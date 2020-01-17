import { Component } from '@angular/core';

/*
*COMONENTE PRINCIPAL QUE SE CARGA AL ARRANCAR LA APP
*
*selector : nombre de la etiqueta para inyectar componentes.
*templatUrl : Vista del HTML.
*styleUrls : estil para la vista formato SCSS.
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //esto es una variable
  title = 'my-app ->  Welcome to the hell';
  productos = [
    {
    "id": 1,
    "nombre": "leche",
    "gluten": false,
    "imagen": "https://www.lechepuleva.es/documents/13930/11057197/PaginaProducto-PulevaEntera.png",
    "categoria": {
      "id": 1,
      "nombre": "Lacteos"
    },
    "historico": [{
      "fecha": "1/1/2020",
      "precio": 1.11
    },
    {
      "fecha": "4/1/2020",
      "precio": 2.11
    },
    {
      "fecha": "21/1/2020",
      "precio": 3.11
    }
    ]
  },
  {
    "id": 2,
    "nombre": "pan",
    "gluten": true,
    "imagen" : "https://steemitimages.com/DQmR2TvrKjLbn7cRD4SqW8gysMS3RgVovxX1FaHtXPBkgkx/pan.png",
    "categoria": {
      "id": 2,
      "nombre": "bolleria"
    },
    "historico": [{
      "fecha": "1/1/2020",
      "precio": 2.11
    },
    {
      "fecha": "12/1/2020",
      "precio": 2.22
    },
    {
      "fecha": "20/1/2020",
      "precio": 3.22
    }
    ]

  },
  {
    "id": 3,
    "nombre": "flan de huevo",
    "gluten": false,
    "imagen" : "https://www.pngjoy.com/pngl/237/4619466_flan-rebanada-de-flan-napolitano-png-transparent-png.png",
    "categoria": {
      "id": 3,
      "nombre": "postres"
    },
    "historico": [{
      "fecha": "1/1/2020",
      "precio": 3.11
    },
    {
      "fecha": "12/1/2020",
      "precio": 3.22
    },
    {
      "fecha": "20/1/2020",
      "precio": 3.33
    }
    ]

  }
  ]//array de productos

pSeleccionado = this.productos[0];

seleccionarProducto =  (producto)  => {
    console.log('hemos hecho click %o ' , producto);
    this.pSeleccionado = producto;
}


}//export class AppComponent
