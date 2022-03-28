import {Statistics} from './statistics-interface';
import {Print} from './print-Interface';
/**
 * Class thats allow the To Figther, it is the super class of different universe (pokemon, Dc,...)
 */
export abstract class Fighter implements Statistics, Print {
  constructor(
        public readonly name: string,
        public readonly attack: number,
        public readonly defense: number,
        public readonly velocity: number,
        public readonly hp: number,
        public readonly weight: number,
        public readonly height: number,
        public readonly catchingPhrase: string,
  ) {

  }

  /**
   * a Catching phrase from the character
   */
    abstract sayCatchingPhrase (): string;

    abstract getDimension() : string;

    getName() : string {
      return this.name;
    };
    getAttack() : number {
      return this.attack;
    };
    getDefense(): number {
      return this.defense;
    };
    getVelocity(): number {
      return this.velocity;
    };
    getHp(): number {
      return this.hp;
    };
    getWeight(): number {
      return this.weight;
    };
    getHeight(): number {
      return this.height;
    };

    print() : string {
      let log: string = '';
      log += `Name: ${this.name}\n`;
      log += `weight: ${this.weight}\n`;
      log += `height: ${this.height}\n`;
      log += `attack: ${this.attack}\n`;
      log += `defense: ${this.defense}\n`;
      log += `hp: ${this.hp}\n`;
      log += `velocity: ${this.velocity}\n`;
      log += `catching Phrase: ${this.sayCatchingPhrase()}\n`;
      return log;
    }
}
