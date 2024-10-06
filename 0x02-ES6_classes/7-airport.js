export default class Airport {
  constructor(name, code) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = name;
    this._code = code;
  }

  toString() {
    return `[Object ${this._code}]`;
  }
}
