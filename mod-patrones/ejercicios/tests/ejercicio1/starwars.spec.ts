import 'mocha';
import {expect} from 'chai';
import {Starwars} from '../../src/ejercicio1/starwars';

describe('Starwars Test', () => {
  const hanSolo = new Starwars('Hansolo', 100, 50, 30, 40, 300, 100, 'It’s not wise to upset a Wookiee');


  it('Starwars must be a class', () => {
    expect( new Starwars('Hansolo', 100, 50, 30, 40, 300, 100, 'It’s not wise to upset a Wookiee')).to.not.equal(TypeError);
  });

  it('Starwars must have a attack', () => {
    expect(hanSolo.getAttack()).to.equal(100);
  });


  it('Starwars must have a defense', () => {
    expect(hanSolo.getDefense()).to.equal(50);
  });

  it('Starwars must have a velocity', () => {
    expect(hanSolo.getVelocity()).to.equal(30);
  });

  it('Starwars must have a hp', () => {
    expect(hanSolo.getHp()).to.equal(40);
  });

  it('Starwars must have a weight', () => {
    expect(hanSolo.getWeight()).to.equal(300);
  });

  it('Starwars must have a height', () => {
    expect(hanSolo.getHeight()).to.equal(100);
  });

  it('Starwars must have a catching phrase', () => {
    expect(hanSolo.sayCatchingPhrase()).to.equal('It’s not wise to upset a Wookiee');
  });
});
