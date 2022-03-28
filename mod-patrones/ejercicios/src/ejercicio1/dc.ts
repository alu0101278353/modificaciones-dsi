import {Fighter} from './fighter';
/**
 * DC universe
 */
export class Dc extends Fighter {
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
    super(name,attack, defense, velocity, hp, weight, height, catchingPhrase);
  }

  /**
   * 
   * @returns a Catching phrase from the character
   */
  sayCatchingPhrase():string {
    return this.catchingPhrase;
  }

  getDimension(): string {
    return 'Dc'
  }
}
