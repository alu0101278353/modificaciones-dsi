import {Fighter} from './fighter';
/**
 * Combat that simulate a battle
 */
export class Combat<T extends Fighter> {
  constructor(
        public readonly attacker: T,
        public readonly defender: T,
  ) {

  }


  getAttacker(): T {
    return this.attacker;
  }

  getDefender(): T {
    return this.defender;
  }

  /**
   *
   * @return a log with the battle
   * __Example__
   * ```ts
   * 'Vegeta VS Deadpool\n';
   *'START\n';
   *'Vegeta hp: 200\n';
   *'Deadpool hp: 200\n';
   *'Vegeta Attacks!!!!\n';
   *'KAKAROTOOO \n';
   *'Vegeta hp: 200\n';
   *'Deadpool hp: 150\n';
   *'Deadpool Attacks!!!!\n';
   *'Say the magic words, Fat Gandalf \n';
   *'Vegeta hp: 0\n';
   *'Deadpool hp: 150\n';
   *'The battle has end....\n';
   *'Deadpool WINS!!!!\n';
   * ```
   */
  start(): string {
    let hpAttacker: number = this.attacker.hp;
    let hpDefender: number = this.defender.hp;
    let combatLog: string = '';

    combatLog += `${this.attacker.name} VS ${this.defender.name}\n`;
    combatLog += 'START\n';

    while (hpAttacker > 0 && hpDefender > 0 ) {
      combatLog += `${this.attacker.name} hp: ${hpAttacker}\n`;
      combatLog += `${this.defender.name} hp: ${hpDefender}\n`;

      combatLog += `${this.attacker.name} Attacks!!!!\n`;
      combatLog += `${this.attacker.sayCatchingPhrase()} \n`;
      hpDefender -= Math.floor(this.calculateDamage(this.attacker, this.defender));
      combatLog += `${this.attacker.name} hp: ${hpAttacker}\n`;
      combatLog += `${this.defender.name} hp: ${hpDefender}\n`;

      combatLog += `${this.defender.name} Attacks!!!!\n`;
      combatLog += `${this.defender.sayCatchingPhrase()} \n`;
      hpAttacker -= Math.floor(this.calculateDamage(this.defender, this.attacker));
      combatLog += `${this.attacker.name} hp: ${hpAttacker}\n`;
      combatLog += `${this.defender.name} hp: ${hpDefender}\n`;
    }

    combatLog += 'The battle has end....\n';
    (hpAttacker > 0) ?
    combatLog += `${this.attacker.name} WINS!!!!\n`:
    combatLog += `${this.defender.name} WINS!!!!\n`;

    return combatLog;
  }

  /**
   * 
   * @param attacker the fighter thats initiate the combat
   * @param defender the fither that is attack
   * @returns the total damage base on the the calculation (50 * (attack / defense) * factor)
   */
  private calculateDamage(attacker: T, defender: T) : number {
    const attackerDimension: string = attacker.getDimension();
    const defenderDimension: string = defender.getDimension();
    const attack = attacker.attack;
    const defense = defender.defense;

    let factor: number = 0.0;

    if (attackerDimension === 'Dc' && defenderDimension === 'Marvel' ||
    attackerDimension === 'Dragonball' && defenderDimension === 'Dc'||
    attackerDimension === 'Marvel' && defenderDimension === 'Dragonball' ||
    attackerDimension === 'StarWars' && defenderDimension === 'Dragonball') {
      factor = 2;
    } else if (attackerDimension === 'StarWars' ||
      defenderDimension === 'StarWars') {
      factor = 1;
    } else {
      factor = 0.5;
    }
    return (50 * (attack / defense) * factor);
  }
}

