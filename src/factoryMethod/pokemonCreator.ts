import { TipoPokemon } from './interfacePokemon';

/**
 * Clase abstracta creadora del tipo de pokemon
 */
export abstract class PokemonCreator {
  public abstract factoryMethod(): TipoPokemon;
  public logic(): string {
    const tipoPokemon = this.factoryMethod();
    return `Pokemon: ${tipoPokemon.getName()}, Ancho: ${tipoPokemon.getWeight()}, Atacck: ${tipoPokemon.getAttack()}\n`;
  } 
}