export class Calculator {
  static calculateTip(cost: number, quality: number, roundUp: boolean): number {
    const rawTip = cost * quality;
    return roundUp ? Math.ceil(rawTip) : Math.round(rawTip * 100) / 100;
  }
}
//assign
