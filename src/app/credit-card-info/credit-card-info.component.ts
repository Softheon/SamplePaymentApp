import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CreditCardService } from '../services/credit-card.service';

/**
 * Collects the credit card information
 * 
 * @export
 * @class CreditCardInfoComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-credit-card-info',
  templateUrl: './credit-card-info.component.html',
  styleUrls: ['./credit-card-info.component.css']
})
export class CreditCardInfoComponent implements OnInit {

  /**
   * Integer array of all of the months in a year
   * 
   * @type {number[]}
   * @memberof CreditCardInfoComponent
   */
  public months: number[] = Array(12).fill(null).map((x, i) => i + 1); // [1,2,3,4,...,12];

  /**
   * All of the name of the months in the year
   * 
   * @type {string[]}
   * @memberof CreditCardInfoComponent
   */
  public monthNames: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  /**
   * Array of the next 20 years starting from the current year
   * 
   * @type {number[]}
   * @memberof CreditCardInfoComponent
   */
  public expirationYears: number[] = Array(21).fill(new Date().getFullYear()).map((x, i) => x + i); //[2017,2018,2019,...,2037];

  /**
   * Creates an instance of CreditCardInfoComponent.
   * @param {Router} router 
   * @param {CreditCardService} cardService 
   * @memberof CreditCardInfoComponent
   */
  constructor(
    private router: Router,
    public cardService: CreditCardService
  ) { }

  /**
   * Initializes the component
   * 
   * @memberof CreditCardInfoComponent
   */
  ngOnInit() {
  }

  /**
   * Navigates to the billing info page
   * 
   * @memberof CreditCardInfoComponent
   */
  public next() : void {
    this.router.navigate(['/billing-info']);
  }
}
