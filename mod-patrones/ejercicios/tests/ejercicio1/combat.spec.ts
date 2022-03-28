import 'mocha';
import {expect} from 'chai';
import {Combat} from '../../src/ejercicio1/combat';
import {Marvel} from '../../src/ejercicio1/marvel';
import {Dragonball} from '../../src/ejercicio1/dragonball';


describe('Combat test', () => {
  const vegeta = new Dragonball('Vegeta', 1000, 500, 300, 200, 100, 50, 'KAKAROTOOO');
  const deadpool = new Marvel('Deadpool', 1000, 500, 300, 200, 100, 50, 'Say the magic words, Fat Gandalf');
  const combat = new Combat(vegeta, deadpool);

  let combatLog: string = '';
  combatLog += 'Vegeta VS Deadpool\n';
  combatLog += 'START\n';
  combatLog += 'Vegeta hp: 200\n';
  combatLog += 'Deadpool hp: 200\n';
  combatLog += 'Vegeta Attacks!!!!\n';
  combatLog += 'KAKAROTOOO \n';
  combatLog += 'Vegeta hp: 200\n';
  combatLog += 'Deadpool hp: 150\n';
  combatLog += 'Deadpool Attacks!!!!\n';
  combatLog += 'Say the magic words, Fat Gandalf \n';
  combatLog += 'Vegeta hp: 0\n';
  combatLog += 'Deadpool hp: 150\n';
  combatLog += 'The battle has end....\n';
  combatLog += 'Deadpool WINS!!!!\n';


  it('Combat must be a class', () => {
    expect(new Combat(vegeta, deadpool)).to.not.equal(TypeError);
  });
  it('Combat must has an attacker', () => {
    expect(combat).to.ownPropertyDescriptor('attacker');
  });
  it('Combat must has an defender', () => {
    expect(combat).to.ownPropertyDescriptor('defender');
  });
  it('Combat must return its defender', () => {
    expect(combat.getDefender()).to.be.equal(deadpool);
  });
  it('Combat must return its Attacker', () => {
    expect(combat.getAttacker()).to.be.equal(vegeta);
  });

  it('Combat must simulate a battle', () => {
    expect(combat.start()).to.be.equal(combatLog);
  });
});
