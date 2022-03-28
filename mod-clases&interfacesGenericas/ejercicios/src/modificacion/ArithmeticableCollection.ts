import { Arimethicable } from './interfaceArithmeticable';

export class ArithmeticableCollection<T extends Arimethicable<T>> {
  constructor(private numeros: T[]) {
  }
  /**
   * Elemento que será añadido
   * @param newNumero element added
   */
  add(newNumero: T): void {
    this.numeros.push(newNumero);
  }
  getArithmeticable(index: number) {
    return this.numeros[index];
  }

  getNumberOfArithmeticables() {
    return this.numeros.length;
  }
}