interface IUsuario {
    id:number;
    nombre:string;
    password:string;
}//IUsuario

export class Usuario implements IUsuario {

    id:number;
    nombre:string;
    password:string;

    constructor(){
    this.id = 0;
    this.nombre = '';
    this.password = '';
    }//constructor
    
}// class usuario