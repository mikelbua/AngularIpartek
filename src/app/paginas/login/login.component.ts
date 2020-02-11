import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
formulario : FormGroup;
  constructor(private builder : FormBuilder) { 
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

  }//enviar



}//class
