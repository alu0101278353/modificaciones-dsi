// import { Fraccion } from './fraccion';
import { Arimethicable } from './interfaceArithmeticable';

export class Rational implements Arimethicable<number> {
  constructor(public numero1: number, public numero2: number) {
    this.numero1 = numero1;
    this.numero2 = numero2;
  }
  /**
   * 
   * @param n1 numerador
   * @param n2 denomidador
   */
  addNumbers(n1: number, n2: number): number[] {
    let numerador: number = 0;
    let denominador: number = 0;
    // let resulFraccNumerador: number = 0;
    // let resulFraccDenominador: number = 0;
    let resul: number[] = [];
    if (this.numero2 === n2) {
      numerador = this.numero1+n1;
      denominador = this.numero2;
      resul.push(numerador);
      resul.push(denominador);
    } else {}
    // } else {
    //   denominador = this.numero2 * this.numero2;
    //   resulFraccNumerador = denominador/this.numero2 * this.numero1;
    //   resulFraccDenominador = 
    // }
    return resul;
  }

  substract(n1: number, n2: number): number[] {
    let numerador: number = 0;
    let denominador: number = 0;
    let resul: number[] =[];
    if (this.numero2 === n2) {
      numerador = this.numero1-n1;
      denominador = this.numero2;
      resul.push(numerador);
      resul.push(denominador);
    }
    return resul;
  }
}
