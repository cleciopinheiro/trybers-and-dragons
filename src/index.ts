import Battle, { PVP, PVE } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1 = new Character('Riven');
const player2 = new Character('Diana');
const player3 = new Character('Tresh');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]): void => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export {
  runBattles,
  pvp,
  pve,
  player1,
  player2,
  player3,
  monster1,
  monster2,
};