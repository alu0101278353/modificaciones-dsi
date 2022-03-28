import 'mocha';
import {expect} from 'chai';
import {Pokedex} from '../../src/ejercicio1/pokedex';
import {Pokemon} from '../../src/ejercicio1/pokemon';
import {Dc} from '../../src/ejercicio1/dc';
import {Marvel} from '../../src/ejercicio1/marvel';
import {Starwars} from '../../src/ejercicio1/starwars';
import {Dragonball} from '../../src/ejercicio1/dragonball';

describe('Pokedex Test', () => {
  const tyranitar = new Pokemon('Tyranitar', 100, 50, 30, 40, 300, 100, 'RRRRRR!');
  const joker = new Dc('Joker', 100, 50, 30, 40, 300, 100, 'hey hey Batman');
  const vegeta = new Dragonball('Vegeta', 1000, 500, 300, 200, 100, 50, 'KAKAROTOOO');
  const deadpool = new Marvel('Deadpool', 100, 50, 3000000, 40, 300, 100, 'Say the magic words, Fat Gandalf');
  const hanSolo = new Starwars('Hansolo', 100, 50, 30, 40, 300, 100, 'It’s not wise to upset a Wookiee');


  const pokedex = new Pokedex(tyranitar, joker, vegeta, deadpool, hanSolo);
  pokedex.showInformation(joker);


  it('Pokedex puede ser instanciado', () => {
    expect(pokedex).to.not.equal(TypeError);
  });
  it('Pokedex tiene un conjunto de fighters', () => {
    expect(pokedex).to.have.own.property('collection');
  });
  it('Pokedex puede enseñar la informacion cualquier fighter', () => {

  });
});
