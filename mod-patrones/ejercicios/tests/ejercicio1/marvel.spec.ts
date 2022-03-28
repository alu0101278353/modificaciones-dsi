import 'mocha';
import {expect} from 'chai';
import {Marvel} from '../../src/ejercicio1/marvel';

describe('Marvel Test', () => {
  const deadpool = new Marvel('Deadpool', 100, 50, 3000000, 40, 300, 100, 'Say the magic words, Fat Gandalf');


  it('Marvel must be a class', () => {
    expect( new Marvel('Deadpool', 100, 50, 3000000, 40, 300, 100, 'Say the magic words, Fat Gandalf')).to.not.equal(TypeError);
  });

  it('Marvel must have a attack', () => {
    expect(deadpool.getAttack()).to.equal(100);
  });


  it('Marvel must have a defense', () => {
    expect(deadpool.getDefense()).to.equal(50);
  });

  it('Marvel must have a velocity', () => {
    expect(deadpool.getVelocity()).to.equal(3000000);
  });

  it('Marvel must have a hp', () => {
    expect(deadpool.getHp()).to.equal(40);
  });

  it('Marvel must have a weight', () => {
    expect(deadpool.getWeight()).to.equal(300);
  });

  it('Marvel must have a height', () => {
    expect(deadpool.getHeight()).to.equal(100);
  });

  it('Marvel must have a catching phrase', () => {
    expect(deadpool.sayCatchingPhrase()).to.equal('Say the magic words, Fat Gandalf');
  });
});
