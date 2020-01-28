import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/model/pokemon';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon-rest',
  templateUrl: './pokemon-rest.component.html',
  styleUrls: ['./pokemon-rest.component.scss']
})
export class PokemonRestComponent implements OnInit {


  pokemon : Pokemon;

  constructor( private PokemonService : PokemonService ) { 

    console.trace('PokemoRestComponent constructor');

    this.pokemon = new Pokemon('pikachu');
    this.pokemon.nombre = 'Pikachu';
    this.pokemon.id = 25;
    this.pokemon.imagen = `https://images-na.ssl-images-amazon.com/images/I/31dQTRb3vHL._AC_SY355_.jpg`;


    console.debug(this.pokemon);
  }

  ngOnInit() {
    console.trace('PokemoRestComponent init');

    //llamadas a los sevicios.
    //cuanod llamamos a un observable tenemos tres posibles metodos, SOLO UNO es OBLIGATORIO.
    //a un observble nos tenemos que subscribir.
    this.PokemonService.getAllPokemon().subscribe(
      data =>{
        console.debug(`perticion CORRECTA data %o`, data);
      },
      error => {
        console.debug(`perticion ERRONE data %o`, error);
      },
      () => {
        console.debug('esto se hace siempre');
      }
      
    );

  }

}
