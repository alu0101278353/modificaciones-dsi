import {Fighter} from './fighter';

/**
 * Fighter pokedex
 */
export class Pokedex<T extends Fighter> {
    public readonly collection:Array<T>;

    /**
     * 
     * @param fighters collecion of fighter
     */
    constructor(...fighters: Array<T>) {
      this.collection = fighters;
    }

    /**
     * 
     * @param individual, the fighter to be found in the array
     * @returns undefined if its not founf, and it is found, the individual
     */
    showInformation(individual: T): string {
      const findedIndividual: T | undefined = this.collection.find((element) => {
        element.getName() === individual.getName();
      });


      if (findedIndividual !== undefined) {
        return findedIndividual.print();
      }

      return 'not Founded';
    }

    getCollection(): T[] {
      return this.collection;
    }
}
