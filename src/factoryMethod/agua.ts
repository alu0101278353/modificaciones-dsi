// file pokedex.ts

import { TipoPokemon } from './interfacePokemon';

/**
 * Clase  que representa al pokemon agua
 * Con los atributos:
 *  namePkemon de tipo string
 *  weightPokemon de tipo number;
 *  heightPokemon de tipo number;
 *  attackPokemon de tipo number;
 *  defensePokemon de tipo number;
 *  hpPokemon de de tipo number;
 *  speedPokemon de tipo number;
 */
export class Agua implements TipoPokemon {
  constructor(private namePokemon: string, private weightPokemon: number, private attackPokemon: number) {
  }
  /**
   * Método getter de nombre
   * @returns el nombre del tipo del pokemon instanciado
   */
  getName(): string {return this.namePokemon;}
  /**
   * Método getter de weight
   * @returns la anchura del pokemon
   */
  getWeight(): number {return this.weightPokemon;}
  /**
   * Método getter de height
   * @returns la altura del pokemon
   */
  // getHeight(): number {return this.heightPokemon;}
  /**
   * Método getter
   * @returns la capacidad de ataques que tiene el pokemon
   */
  getAttack(): number {return this.attackPokemon;}
  /**
   * Método setter
   * @param value pone el nuevo valor de ataque que tendrá el pokemon
   */
  setAttack(value: number) {this.attackPokemon = value;}
  /**
   * Método getter de la defensa que tiene el pokemon
   * @returns la defensa del pokemon
   */
  // getDefense(): number {return this.defensePokemon;}
  // /**
  //  * Método getter del hp
  //  * @returns el hp del pokemon
  //  */
  // getHp(): number {return this.hpPokemon;}
  // /**
  //  * Método setter de Hp
  //  * Pone el nuevo valor de hp que tendrá el pokemon
  //  */
  // setHp(value: number) {this.hpPokemon = value;}
  // /**
  //  * Método getter de la rapidez
  //  * @returns la rapidez del pokemon
  //  */
  // getSpeed(): number {return this.speedPokemon;}

  /**
   * Imprime los datos del pokemon
   * @returns datos del pokemon como string
   */
  // printPokemon(): string {
  //   let outSt: string = '';
  //   outSt = `Pokemon: ${this.namePokemon}\n Ancho: ${this.weightPokemon}\n Altura: ${this.heightPokemon}\n ataque: ${this.attackPokemon}\n defensa: ${this.defensePokemon}\n hp: ${this.hpPokemon}\n rapidez: ${this.speedPokemon}`;
  //   return outSt;
  // }
}