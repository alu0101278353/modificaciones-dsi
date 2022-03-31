/**
 * Clase que representa el sistema métrico y convierte al sistema imperial
 */
export class MetricLength {
  constructor(public numero: number, public length: string) {
  }

  /**
   * Método que convierte
   * @returns un string
   */
  milimetrostoPulgada(): string {
    let resul: number = 0;
    let resulfinal: string= '';
    if (this.length === 'ml') {
      resul = this.numero * 0.03937;
      resulfinal = `${this.numero} ${this.length} es ${resul} pulgadas`;
    }
    return resulfinal;
  }

  centimetroToPulgada(): string {
    let resul: number = 0;
    let resulfinal: string= '';
    if (this.length === 'cm') {
      resul = this.numero * 0.3937;
      resulfinal = `${this.numero} ${this.length} es ${resul} pulgadas`;
    }
    return resulfinal;
  }

  metroToYarda(): string {
    let resul: number = 0;
    let resulfinal: string= '';
    if (this.length === 'cm') {
      resul = this.numero * 1.0936;
      resulfinal = `${this.numero} ${this.length} es ${resul} yardas`;
    }
    return resulfinal;
  }

  kilometroToMilla(): string {
    let resul: number = 0;
    let resulfinal: string= '';
    if (this.length === 'cm') {
      resul = this.numero * 0.6214;
      resulfinal = `${this.numero} ${this.length} es ${resul} milla`;
    }
    return resulfinal;
  }
}