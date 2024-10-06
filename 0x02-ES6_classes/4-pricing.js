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

  set amount(value) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw TypeError('Currency must be a currency');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  // static methods are utility methods and work at the class level not instance
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw TypeError('ConversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
