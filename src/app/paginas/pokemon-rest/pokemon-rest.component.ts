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
    /*this.pokemon.nombre = 'Pikachu';
    this.pokemon.id = 25;
    this.pokemon.imagen = `https://images-na.ssl-images-amazon.com/images/I/31dQTRb3vHL._AC_SY355_.jpg`;
    */
    
    console.debug(this.pokemon);
  }//constructor

  ngOnInit() {
    console.trace('PokemoRestComponent init');

    this.getPokemon('nombrePokemon');
  }//init

  buscarPoquemon(){
    this.getPokemon(this.nombrePokemon);
  }

  getPokemon (nombre : string){

    //llamadas a los sevicios.
    //cuanodo llamamos a un observable tenemos tres posibles metodos, SOLO UNO es OBLIGATORIO.
    //a un observble nos tenemos que subscribir.
    this.PokemonService.getPokemonByNombre( 'nombrePokemon' ).subscribe(
      data => {
        console.debug('peticion correcta data %o', data);
        // mapear de Json a Pokemon
        this.pokemon.id = data.id;
        this.pokemon.nombre = data.name;
        this.pokemon.imagen = data.sprites.front_default;

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
      error => {
        console.warn('peticion ERRONEA data %o', error);
        this.mensaje = 'No existe pokemon X';
      },
      () => {
        console.trace('esto se hace siempre');
      }
    );

  }

}
