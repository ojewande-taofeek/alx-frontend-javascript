import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') {
      throw TypeError('Floors must be a number');
    }
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  set floors(val) {
    if (typeof val === 'number') {
      this._floors = val;
    } else {
      throw TypeError('Floors must be a number');
    }
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
