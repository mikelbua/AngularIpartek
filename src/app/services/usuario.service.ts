import { Injectable } from '@angular/core';
import { IUsuarioService } from './IUsuario.service';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService implements IUsuarioService{

  private isLogged : boolean;
  
  constructor() {
      console.debug('UsuarioService contructor');
      this.isLogged=false;
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
      this.isLogged = true;

    } else {
      console.trace('Usuario no encontrado');
      this.isLogged = false;
    }

    return usuarioBuscar;

  }//login

  cerrarSesion(): void {
    console.trace('UsuarioService cerrarSesion');
    this.isLogged = false;
  }

  estaLogeado(): boolean {
    //console.trace('UsuarioService  funcion estaLogeado');
    return this.isLogged;
  }



  
}//class
