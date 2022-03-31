import { ImperialLength } from './imperialLength';
import { MetricLength } from './metricLength';

export class Adapter extends MetricLength {
  constructor(private service: ImperialLength) {
    super(service.numero, service.length);
  }


  getData():string {
    if (this.service.length === 'plg') {
      return this.service.pulgadaToCentimetro();
    } else if (this.service.length === 'pie') {
      return this.service.pieTometro();
    } else if (this.service.length === 'yd') {
      return this.service.yardaTometro();
    } else {
      return '0';
    }
  }

  // Client code
  clientCode(data: string) {
    console.log(data);
  }
}