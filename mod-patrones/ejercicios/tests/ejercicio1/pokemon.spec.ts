import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../../src/ejercicio1/pokemon';

describe('Pokemon Test', () => {
  const tyranitar = new Pokemon('Tyranitar', 100, 50, 30, 40, 300, 100, 'RRRRRR!');


  it('Pokemon must be a class', () => {
    expect( new Pokemon('Tyranitar', 100, 50, 30, 40, 300, 100, 'RRRRRR!')).to.not.equal(TypeError);
  });

  it('Pokemon must have a attack', () => {
    expect(tyranitar.getAttack()).to.equal(100);
  });


  it('Pokemon must have a defense', () => {
    expect(tyranitar.getDefense()).to.equal(50);
  });

  it('Pokemon must have a velocity', () => {
    expect(tyranitar.getVelocity()).to.equal(30);
  });

  it('Pokemon must have a hp', () => {
    expect(tyranitar.getHp()).to.equal(40);
  });

  it('Pokemon must have a weight', () => {
    expect(tyranitar.getWeight()).to.equal(300);
  });

  it('Pokemon must have a height', () => {
    expect(tyranitar.getHeight()).to.equal(100);
  });

  it('Pokemon must have a catching phrase', () => {
    expect(tyranitar.sayCatchingPhrase()).to.equal('RRRRRR!');
  });
});
