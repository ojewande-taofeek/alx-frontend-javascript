import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw TypeError('Currency must be a currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof val === 'number') {
      this._amount = val;
    } else {
      throw TypeError('Amount must be a number');
    }
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (val instanceof Currency) {
      this._currency = val;
    } else {
      throw TypeError('Currency must be a currency');
    }
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw TypeError('Number must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw TypeError('Number must be a number');
    }
    return amount * conversionRate;
  }
}
