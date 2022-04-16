import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../interface/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemons: Pokemon[] = [];

  constructor(private httpClient: HttpClient ) {
    this.getPokemons();
   }

   async getPokemons(){
    const requisição = await this.httpClient
    .get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').toPromise();
    this.pokemons = requisição.results

    }
}

