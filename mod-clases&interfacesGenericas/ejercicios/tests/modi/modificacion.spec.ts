import 'mocha';
import {expect} from 'chai';
import {Rational} from '../../src/modificacion/rational';

describe('clase rational', () => {
  const f1 = new Rational(1, 2);
  // const f2 = new Rational(2, 2);
  it('instancia de la clase rational, método suma', () => {
    expect(f1.addNumbers(2, 2)).to.be.eql([3, 2]);
  });
  it('instancia de la clase rational, metodo resta', () => {
    expect(f1.addNumbers(2, 2)).to.be.eql([3, 2]);
  });
});