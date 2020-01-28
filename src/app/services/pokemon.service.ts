import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {
    console.trace('PokemonService constructor');
  }

  getAllPokemon(): Observable<any>{
    let url = 'https://pokeapi.co/api/v2/pokemon/';
    console.trace('');
    return this.http.get(url);

  }

  getPokemon(nombre : string): Observable<any>{
    let url = 'https://pokeapi.co/api/v2/pokemon/'+ nombre;
    console.trace('');
    return this.http.get(url);

  }

  
}
