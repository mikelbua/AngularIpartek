import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
formulario : FormGroup;

  constructor( private router : Router , 
               private builder : FormBuilder,
               private usarioService : UsuarioService) { 
    //Contruir formulario
    this.construirform();
  }//constructor

  ngOnInit() {
  }//init


  private construirform(){
    this.formulario = this.builder.group({
    //Definir lo Formcontrols == inputs [value,validaciones]

    nombre : ['',[Validators.required , Validators.minLength(2) , Validators.maxLength(15)]],
    password : ['',[Validators.required , Validators.minLength(2) , Validators.maxLength(8)]]
    
    });
  }

  enviar(values : any)
  { 
    console.trace('Enviar formulario %o', values);
    const nombre = values.nombre;
    const password = values.password;
    const uLogeado = this.usarioService.login(nombre,password);

    if (uLogeado) {
      console.trace('user logeado');
      this.router.navigate(['privado']);

      
    }else{
      console.warn('usuario no logeafo');
      alert('Por favor prueba de nuevo a logearte');
    }


  }//enviar

  



}//class
