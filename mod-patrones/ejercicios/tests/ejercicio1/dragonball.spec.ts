import 'mocha';
import {expect} from 'chai';
import {Dragonball} from '../../src/ejercicio1/dragonball';

describe('Dragonball Test', () => {
  const vegeta = new Dragonball('Vegeta', 1000, 500, 300, 200, 100, 50, 'KAKAROTOOO');


  it('Dragonball must be a class', () => {
    expect( new Dragonball('Vegeta', 1000, 500, 300, 200, 100, 50, 'KAKAROTOOO')).to.not.equal(TypeError);
  });

  it('Dragonball must have a attack', () => {
    expect(vegeta.getAttack()).to.equal(1000);
  });


  it('Dragonball must have a defense', () => {
    expect(vegeta.getDefense()).to.equal(500);
  });

  it('Dragonball must have a velocity', () => {
    expect(vegeta.getVelocity()).to.equal(300);
  });

  it('Dragonball must have a hp', () => {
    expect(vegeta.getHp()).to.equal(200);
  });

  it('Dragonball must have a weight', () => {
    expect(vegeta.getWeight()).to.equal(100);
  });

  it('Dragonball must have a height', () => {
    expect(vegeta.getHeight()).to.equal(50);
  });

  it('Dragonball must have a catching phrase', () => {
    expect(vegeta.sayCatchingPhrase()).to.equal('KAKAROTOOO');
  });
});
