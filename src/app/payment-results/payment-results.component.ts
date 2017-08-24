import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PaymentService } from '../services/payment.service';

/**
 * Displays the payment results to the user
 * 
 * @export
 * @class PaymentResultsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-payment-results',
  templateUrl: './payment-results.component.html',
  styleUrls: ['./payment-results.component.css']
})
export class PaymentResultsComponent implements OnInit {

  /**
   * Creates an instance of PaymentResultsComponent.
   * @param {Router} router 
   * @param {PaymentService} paymentService 
   * @memberof PaymentResultsComponent
   */
  constructor(
    private router: Router,
    public paymentService: PaymentService
  ) {
    //Go to the first page if user refershed the page
    if (!this.paymentService.payment) {
      this.router.navigate(['/credit-card-info']);
    }
  }

  /**
   * Initializes the component
   * 
   * @memberof PaymentResultsComponent
   */
  ngOnInit() {
  }

  /**
   * Navigate to the credit card information page
   * 
   * @memberof PaymentResultsComponent
   */
  public makeAnotherPayment(): void {
    this.router.navigate(['/credit-card-info']);
  }
}
