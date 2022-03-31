/**
 * Clase que hace la conversión al sistema métrico
 */
export class ImperialLength {
  constructor(public numero: number, public length: string) {
  }
  pulgadaToCentimetro(): string {
    let resul: number = 0;
    let resulfinal: string= '';
    if ( this.length === 'plg' ) {
      resul = this.numero * 2.54;
      resulfinal = `${this.numero} ${this.length} es ${resul} cm`;
    }
    return resulfinal;
  }
  /**
   * Convierte pie a metro
   * @returns string
   */
  pieTometro(): string {
    let resul: number = 0;
    let resulfinal: string= '';
    if ( this.length === 'pie' ) {
      resul = this.numero * 0.3048;
      resulfinal = `${this.numero} ${this.length} es ${resul} m`;
    }
    return resulfinal;
  }

  /**
   * cobietrte yarda a metro
   * @returns string 
   */
  yardaTometro(): string {
    let resul: number = 0;
    let resulfinal: string= '';
    if ( this.length === 'yd' ) {
      resul = this.numero * 0.9144;
      resulfinal = `${this.numero} ${this.length} es ${resul} m`;
    }
    return resulfinal;
  }

  /**
   * Convierte milla a metro
   * @returns string
   */
  millaTokilometro(): string {
    let resul: number = 0;
    let resulfinal: string= '';
    if ( this.length === 'milla' ) {
      resul = this.numero * 1.6093;
      resulfinal = `${this.numero} ${this.length} es ${resul} km`;
    }
    return resulfinal;
  }
}