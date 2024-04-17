import { Calculator } from './calculator';

describe('Calculator', () => {
  it('should calculate the correct tip when rounding to the nearest cent', () => {
    expect(Calculator.calculateTip(100, 0.18, false)).toEqual(18);
  });

  it('should calculate the correct tip when rounding up to the nearest dollar', () => {
    expect(Calculator.calculateTip(123, 0.20, true)).toEqual(25); // 24.6 should round up to 25
  });

  it('should handle zero appropriately', () => {
    expect(Calculator.calculateTip(0, 0.15, false)).toEqual(0);
  });

  it('should handle negative numbers (if applicable, although unrealistic in real usage)', () => {
    expect(Calculator.calculateTip(-100, 0.20, true)).toEqual(-20);
    expect(Calculator.calculateTip(-100, 0.20, false)).toEqual(-20);
  });
});
