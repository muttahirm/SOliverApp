import { calculatePriceAfterDiscount } from './calculatePriceAfterDiscount'; // Adjust the import path based on your file structure

describe('calculatePriceAfterDiscount', () => {
  it('should apply a discount and return the correct price', () => {
    const result = calculatePriceAfterDiscount(100, 20); // 20% discount on $100
    expect(result).toBe(80);
  });

  it('should return the retail price when no discount is provided', () => {
    const result = calculatePriceAfterDiscount(100); // No discount
    expect(result).toBe(100);
  });

  it('should correctly round the price after discount', () => {
    const result = calculatePriceAfterDiscount(99.99, 25); // 25% discount on $99.99
    expect(result).toBe(74.99);
  });

  it('should handle a discount of 0%', () => {
    const result = calculatePriceAfterDiscount(100, 0); // 0% discount
    expect(result).toBe(100);
  });
});
