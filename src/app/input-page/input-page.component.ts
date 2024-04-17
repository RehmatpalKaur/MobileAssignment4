import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipCalculatorService } from '../tip-calculator.service';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css']
})
export class InputPageComponent {
  costOfService: number = 0;
  serviceQuality: number = 0.15; // Default to Okey
  roundUp: boolean = false;

  constructor(private tipCalculatorService: TipCalculatorService, private router: Router) {}

  calculateTip() {
    this.tipCalculatorService.calculateTip(this.costOfService, this.serviceQuality, this.roundUp);
    this.router.navigate(['/output']);
  }
}
