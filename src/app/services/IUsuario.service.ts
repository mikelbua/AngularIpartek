import { Usuario } from '../model/usuario';

export interface IUsuarioService {
    estaLogeado() : boolean;


    /**
     * comprueba qeu exista el usuario
     * @param nombre 
     * @param password 
     * @returns usuario con datos si existe, undefine si no existe
     */
    login(nombre : string , password : string):Usuario;

    cerrarSesion(idUsuario : number):void;
}