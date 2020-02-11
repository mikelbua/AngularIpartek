import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

constructor(private router: Router , private usuarioService : UsuarioService){
  console.debug('Constructor LoginGuard');
}//constructor

  canActivate(
    
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const logeado : boolean = this.usuarioService.estaLogeado();

    if( !logeado){

      this.router.navigate(['login']);
    }
    return logeado;
    //TODO si el usuario no se ha logeado false en cso contrario true
    //TODO crear provider do servicio para login de usuario
    //TODO servicio Rest de mySql
      console.debug('canActivate de LoginGuard');
      
      this.router.navigate(['login']);
      return true;
  }//state
  
}//class
