import { Color } from './color';

export class Fruta {

    id:number;
    nombre:string;
    precio:number;
    imagen:string;
    colores:Array<Color>;

    constructor(nombre? : string){
        this.id  = 0;
        this.nombre = (nombre) ? nombre : '';
        this.precio = 2.40;
        this.imagen = 'assets/images/fruta.jpg';
        this.colores = new Array<Color>();
    }
}