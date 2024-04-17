import { Calculator } from './calculator';

describe('Calculator', () => {
  it('should create an instance', () => {
    expect(new Calculator()).toBeTruthy();
  });

  it('should calculate the right tip amount', () => {
    const calculator = new Calculator(100, 0.15, false);
    expect(calculator.calculateTip()).toEqual(15);
  });

  it('should calculate the tip amount rounded up to the nearest dollar', () => {
    const calculator = new Calculator(100, 0.15, true);
    expect(calculator.calculateTip()).toBeGreaterThan(15);
  });
}
//assign
