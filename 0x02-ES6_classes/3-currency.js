export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(val) {
    if (typeof val === 'string') {
      this._code = val;
    } else {
      throw TypeError('Code must be a string');
    }
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val === 'string') {
      this._name = val;
    } else {
      throw TypeError('Name must be a string');
    }
  }

  displayFullCurrency() {
    return `${this._name}(${this._code})`;
  }
}
