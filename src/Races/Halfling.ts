import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static count = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.count += 1;
  }

  static createdRacesInstances(): number {
    return this.count;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}