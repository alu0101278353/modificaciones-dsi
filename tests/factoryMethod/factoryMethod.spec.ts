import 'mocha';
import {expect} from 'chai';
import {PokemonCreator} from '../../src/factoryMethod/pokemonCreator';
import {PokemonFuegoCreator} from '../../src/factoryMethod/pokemonFuegoCreator';
import {PokemonAguaCreator} from '../../src/factoryMethod/pokemonAguaCreator';

describe('Method Creator', () => {
  const fuego: PokemonCreator = new PokemonFuegoCreator('fuego', 25, 16);
  const agua: PokemonCreator = new PokemonAguaCreator('agua', 25, 16);

  it('pokemonFuegoCreator', () => {
    expect(fuego.logic()).to.be.equal('Pokemon: fuego, Ancho: 25, Atacck: 16\n');
  });
  it('pokemonAguaCreator', () => {
    expect(agua.logic()).to.be.equal('Pokemon: agua, Ancho: 25, Atacck: 16\n');
  });
});