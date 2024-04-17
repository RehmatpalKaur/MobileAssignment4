import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipCalculatorService {
  costOfService: number = 0;
  serviceQuality: number = 0.15; // Default to 15%
  tip: number = 0;

  constructor() {}

  calculateTip(cost: number, quality: number, roundUp: boolean) {
    this.costOfService = cost;
    this.serviceQuality = quality;
    const rawTip = this.costOfService * this.serviceQuality;
    this.tip = roundUp ? Math.ceil(rawTip) : Math.round(rawTip * 100) / 100;
  }
}
