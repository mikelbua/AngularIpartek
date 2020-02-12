import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { PokemonService } from "src/app/services/pokemon.service";

@Component({
  selector: 'app-pokemon-rest',
  templateUrl: './pokemon-rest.component.html',
  styleUrls: ['./pokemon-rest.component.scss']
})
export class PokemonRestComponent implements OnInit {


  pokemon : Pokemon;
  mensaje : string;
  nombrePokemon : string;

  constructor( private PokemonService : PokemonService ) { 

    console.trace('PokemoRestComponent constructor');

    this.pokemon = new Pokemon('');
    this.nombrePokemon = '';
    
    console.debug(this.pokemon);
  }//constructor

  ngOnInit() {
    console.trace('PokemoRestComponent init');
  }//init

  buscarPoquemon(){
    this.getPokemon(this.nombrePokemon);
  }

  getPokemon (nombre : string){
    
    //llamadas a los sevicios.
    //cuanodo llamamos a un observable tenemos tres posibles metodos 
    //next,error y complete, SOLO UNO es OBLIGATORIO (next).
    //a un observble nos tenemos que subscribir.
    this.PokemonService.getPokemonByNombre( nombre ).subscribe(
      data => {
        console.debug('peticion correcta data %o', data);
        // mapear de Json a Pokemon
        this.pokemon.id = data.id;
        this.pokemon.nombre = data.name;
        this.pokemon.imagen = data.sprites.front_default;

        //limpiamos el array de habilidades en español que utilizaremos mas abajo para que no se acumulen.
        this.pokemon.habilidades = [];

        const habilidadesNames = data.abilities.map( el => el.ability.name );
        console.debug('habilidades en ingles %o', habilidadesNames);
        
        habilidadesNames.forEach( habilidad => {
            // conseguir su habilidad en castellano
            this.PokemonService.getHabilidad( habilidad ).subscribe(
              json => {
                console.debug('habilidad %o' ,  json);
                const habilidadCastellano = json.names.find( el => el.language.name === 'es' );
                console.debug('recupera habiliada en castellano %o', habilidadCastellano);
                this.pokemon.habilidades.push( habilidadCastellano.name );
            });


        });

        this.mensaje = 'Pokemon cargado desde https://pokeapi.co';

      },
      error => {//metodo error de Observable (no obligatorio).
        console.warn('peticion ERRONEA data %o', error);
        this.mensaje = 'No existe pokemon '+ nombre;
      },
      () => {//metodo complete de Observable (no obligatorio).
        console.trace('esto se hace siempre');
      }
    );

  }//getPokemon

}
