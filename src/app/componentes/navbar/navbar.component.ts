import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {



  constructor(private router : Router,
              private usuarioServide : UsuarioService) { 


  }//constructor

  ngOnInit() {

  }//init

  salir(){

    console.trace('funcion salir ');
    
    let mensaje = 'Estas seguro de que quieres cerrar la sesinon';
    if(confirm(mensaje)){
      this.usuarioServide.cerrarSesion();
      this.router.navigate(['login']);
    }

  }//salir

}
