import { Injectable } from '@angular/core';
import { IUsuarioService } from './IUsuario.service';
import { Usuario } from '../model/usuario';

const KEY_LOGEADO = 'isLogged';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IUsuarioService{

 
  private storage: Storage;
  
  constructor() {
      console.debug('UsuarioService contructor');
      //esto guardaria en el local storage del navegador la sesion para siempre en el navegador.
      //this.storage = window.localStorage;
      
      //esto guardara en el local storage del navegador la sesion hasta que se cierre el navegador.
      this.storage = window.sessionStorage;
    
    }//constructor
  
  /**
   * Busca el usuario por nombre y password
   * @param nombre 
   * @param password 
   * @return Usuario con datos si existe, undefined si no encuentra
   */
  login(nombre: string, password: string): import("../model/usuario").Usuario {
    const NOMBRE = 'admin';
    const PASSWORD = 'admin';
    let usuarioBuscar = new Usuario;//si no en el siguiete if es qeu es undefined

    if (NOMBRE === nombre && PASSWORD === password){
      console.trace('Usuario encontrado');
      //crear usuario
      usuarioBuscar.nombre = nombre;
      usuarioBuscar.password = password;
      usuarioBuscar.id  = 99;
      //marcar que esta logeado
      this.storage.setItem(KEY_LOGEADO, JSON.stringify(usuarioBuscar));

    } else {
      console.trace('Usuario no encontrado');
      this.storage.removeItem(KEY_LOGEADO);
    }

    return usuarioBuscar;

  }//login

  cerrarSesion(): void {
    console.trace('UsuarioService cerrarSesion');
    this.storage.removeItem(KEY_LOGEADO);
  }

  estaLogeado(): boolean {
    //console.trace('UsuarioService  funcion estaLogeado');

    return !!this.storage.getItem(KEY_LOGEADO);
  }



  
}//class
