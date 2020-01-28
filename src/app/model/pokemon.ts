export class Pokemon {

    private _id: number;
    private _nombre: string;
    private _imagen: string;
    
    constructor(nombre : string){
        this._id = 0;
        this.nombre = nombre;
        this._imagen = 'https://static.turbosquid.com/Preview/2014/05/25__19_38_41/POKEBALL_LASTRENDER_thumb.jpgaee5aa9b-36fa-4679-a03f-0297d4c6b9a6DefaultHQ.jpg';
    }


    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nombre(): string {
        return this._nombre;
    }

    public set nombre(value: string) {
        this._nombre = (value !== undefined && value !== '')? value : 'sin nombre';
    }

    public get imagen(): string {
        return this._imagen;
    }
    public set imagen(value: string) {
        this._imagen = value;
    }


}
