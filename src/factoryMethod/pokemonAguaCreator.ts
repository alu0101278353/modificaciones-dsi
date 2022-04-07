import { TipoPokemon } from './interfacePokemon';
import { PokemonCreator } from './pokemonCreator';
import { Agua } from './agua';
/**
 * clase creadora de Pokemon Agua
 */
export class PokemonAguaCreator extends PokemonCreator {
  constructor(private name: string, private weight: number, private atacck: number) {
    super();
  }
  /**
   * Metodo Creador de la clase Pokemon Creator
   * @returns pokemon Agua
   */
  public factoryMethod(): TipoPokemon {
    return new Agua(this.name, this.weight, this.atacck);
  }
}