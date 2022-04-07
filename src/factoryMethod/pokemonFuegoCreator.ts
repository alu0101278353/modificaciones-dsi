import { TipoPokemon } from './interfacePokemon';
import { Fuego } from './fuego';
import { PokemonCreator } from './pokemonCreator';
/**
 * clase creadora de Pokemon Fuego 
 */
export class PokemonFuegoCreator extends PokemonCreator {
  constructor(private name: string, private weight: number, private atacck: number) {
    super();
  }
  /**
   * Metodo Creador de la clase Pokemon Creator
   * @returns un pokemon Fuego
   */
  public factoryMethod(): TipoPokemon {
    return new Fuego(this.name, this.weight, this.atacck);
  }
}