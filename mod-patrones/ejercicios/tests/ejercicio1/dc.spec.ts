import 'mocha';
import {expect} from 'chai';
import {Dc} from '../../src/ejercicio1/dc';

describe('Dc Test', () => {
  const joker = new Dc('Joker', 100, 50, 30, 40, 300, 100, 'hey hey Batman');


  it('Dc must be a class', () => {
    expect( new Dc('Joker', 100, 50, 30, 40, 300, 100, 'hey hey Batman')).to.not.equal(TypeError);
  });

  it('Dc must have a attack', () => {
    expect(joker.getAttack()).to.equal(100);
  });


  it('Dc must have a defense', () => {
    expect(joker.getDefense()).to.equal(50);
  });

  it('Dc must have a velocity', () => {
    expect(joker.getVelocity()).to.equal(30);
  });

  it('Dc must have a hp', () => {
    expect(joker.getHp()).to.equal(40);
  });

  it('Dc must have a weight', () => {
    expect(joker.getWeight()).to.equal(300);
  });

  it('Dc must have a height', () => {
    expect(joker.getHeight()).to.equal(100);
  });

  it('Dc must have a catching phrase', () => {
    expect(joker.sayCatchingPhrase()).to.equal('hey hey Batman');
  });
});
