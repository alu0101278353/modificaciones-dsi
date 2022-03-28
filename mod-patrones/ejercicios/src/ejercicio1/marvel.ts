import {Fighter} from './fighter';
export class Marvel extends Fighter {
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

  sayCatchingPhrase():string {
    return this.catchingPhrase;
  }

  getDimension(): string {
    return 'Marvel'
  }
}
