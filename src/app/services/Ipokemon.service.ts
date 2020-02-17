import { Observable } from "rxjs";

export interface IPokemonService {


    /**
     * recuperamos los daton en json de un pokemon por su nombre. 
     * @param nombre : string  ->  nombre del Pokemon.
     */

    getPokemonByNombre(nombre : string):Observable<any>;

/**
     * recupera el nombre de la habilidad en castellano
     * @param nombreHabilidad: nombre habilidad en ingles
     * @see GET /api/v2/ability/{name}/
     */
    getHabilidad( nombreHabilidad: number): Observable<any>;

}
