import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getter for amount
  get amount() {
    return this._amount;
  }

  // setter for amount
  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  // getter of currency
  get currency() {
    return this._currency;
  }

  // setter for currency
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a currency');
    }
    this._currency = value;
  }

  // displayFullPrice method
  displayFullPrice() {
    return `${this._amount} ${new Currency(this._currency.code, this._currency.name).displayFullCurrency()}`;
  }

  // a static method
  static convertPrice(amount, conversionRate) {
    return Number(amount) * Number(conversionRate);
  }
}
