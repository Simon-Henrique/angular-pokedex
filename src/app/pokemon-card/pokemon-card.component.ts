import { Pokemon } from './../interface/pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.sass']
})
export class PokemonCardComponent {
@Input()
pokemon: string | any;

@Input()

number: Number | any;

getImgPokemon(){
  const formatNumber = this.leadingZero(this.number);
  return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatNumber}.png`
}
leadingZero(str: String | Number, size=3) {
  let s = String(str);
  while (s.length < (size || 2)){
    s = '0' + s;
}
return s
}
caption(pokemon:string): string{
  var primeiraLetra = this.pokemon.charAt(0).toUpperCase();
  var restante = this.pokemon.slice(1);
  var res = primeiraLetra + restante
  return res
}
}
