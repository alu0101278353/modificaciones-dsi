import 'mocha';
import {expect} from 'chai';
import {Adapter} from '../src/adapater';
import { ImperialLength } from '../src/imperialLength';

describe('Patron adapter', () => {
  const imperial = new ImperialLength(5, 'plg');
  // const metrico = new MetricLength(500, 'ml');
  const adapter = new Adapter(imperial);
  it('plg a centimetro', () => {
    expect(adapter.getData()).to.be.equal('5 plg es 12.7 cm');
  });
  it('plg a centimetro sin adapter', () => {
    expect(imperial.pulgadaToCentimetro()).to.be.equal('5 plg es 12.7 cm');
  });

  // it('add(-1, 8) returns value 7', () => {
  //   expect(add(-1, 8)).to.be.equal(7);
  // });

  // it('add(1.2, 3.5) returns value 4.7', () => {
  //   expect(add(1.2, 3.5)).to.be.equal(4.7);
  // });
});