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
  
  
  login(nombre: string, password: string): import("../model/usuario").Usuario {
    const NOMBRE = 'admin';
    const PASSWORD = 'admin';
    let usuarioBuscar = undefined;//si no en el siguiete if es qeu es undefined

    if (NOMBRE === nombre && PASSWORD === password){
      console.trace('Usuario encontrado');
      //crear usuario
      usuarioBuscar = new Usuario();
      usuarioBuscar.nombre = nombre;
      usuarioBuscar.password = password;
      usuarioBuscar.idUsuario  = 99;
      //marcar que esta logeado
      this.isLogged = true;

    } else {
      console.trace('Usuario no encontrado');
      this.isLogged = false;
    }

    return usuarioBuscar;

  }//login

  cerrarSesion(idUsuario: number): void {
    this.isLogged = false;
  }

  estaLogeado(): boolean {
    console.debug('el usuario esta logeado');
    this.isLogged = false; 

    return this.isLogged;
  }



  
}//class
