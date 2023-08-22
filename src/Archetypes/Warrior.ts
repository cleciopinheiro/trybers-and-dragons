import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: string;
  static count = 0;

  constructor(name: string) {
    super(name);
    Warrior.count += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances() {
    return this.count;
  }

  get energyType(): string {
    return this._energyType;
  }
}