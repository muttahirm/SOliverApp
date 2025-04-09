import { getPriceValueWithCurrency } from './getPriceValueWithCurrency';

describe('getPriceValueWithCurrency', () => {
  it('formats number price with default locale and currency (EUR)', () => {
    const result = getPriceValueWithCurrency(1234.56);
    expect(result).toBe(new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(1234.56));
  });

  it('formats string price with default locale and currency (EUR)', () => {
    const result = getPriceValueWithCurrency('1234.56');
    expect(result).toBe(new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(1234.56));
  });

  it('formats price using custom locale and currency', () => {
    const result = getPriceValueWithCurrency(1000, 'en-US', 'USD');
    expect(result).toBe('$1,000.00');
  });

  it('throws an error if price is not a number or valid string', () => {
    expect(() => getPriceValueWithCurrency('invalid')).toThrow('Invalid price value: invalid');
  });

  it('throws an error if price is a negative number', () => {
    expect(() => getPriceValueWithCurrency(-50)).toThrow('Invalid price value: -50');
  });

  it('formats zero correctly', () => {
    const result = getPriceValueWithCurrency(0);
    expect(result).toBe(new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(0));
  });
});
