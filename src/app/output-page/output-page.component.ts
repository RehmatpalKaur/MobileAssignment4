import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipCalculatorService } from '../tip-calculator.service';

@Component({
  selector: 'app-output-page',
  templateUrl: './output-page.component.html',
  styleUrls: ['./output-page.component.css']
})
export class OutputPageComponent {
  constructor(public tipCalculatorService: TipCalculatorService, private router: Router) {}

  goBack() {
    this.router.navigate(['/input']);
  }
}
//assign
