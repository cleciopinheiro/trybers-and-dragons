import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _energyType: string;
  static count = 0;

  constructor(name: string) {
    super(name);
    Ranger.count += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances() {
    return this.count;
  }

  get energyType(): string {
    return this._energyType;
  }
}