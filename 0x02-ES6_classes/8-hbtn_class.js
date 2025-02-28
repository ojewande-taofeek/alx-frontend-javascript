export default class ALXClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw TypeError('Location must be a string');
    }
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(val) {
    if (typeof val === 'number') {
      this._size = val;
    } else {
      throw TypeError('Size must be a number');
    }
  }

  get location() {
    return this._location;
  }

  set location(val) {
    if (typeof val === 'string') {
      this._location = val;
    } else {
      throw TypeError('Location must be a string');
    }
  }

  [Symbol.toPrimitive](type) {
    if (type === 'number') {
      return this._size;
    }
    if (type === 'string') {
      return this._location;
    }
    return null;
  }
}
