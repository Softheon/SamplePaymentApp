import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Address } from '../models/address.model';
import { CreditCardService } from '../services/credit-card.service';
import { AccessTokenRequest } from '../models/access-token-request.model';
import { environment } from '../../environments/environment';
import { AuthorizationService } from '../services/authorization.service';
import { PaymentService } from '../services/payment.service';
import { PaymentRequest } from '../models/payment-request.model';
import { PaymentMethod } from '../models/payment-method.model';


/**
 * Collects the billing info for the credit card payment
 * 
 * @export
 * @class BillingInfoComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.css']
})
export class BillingInfoComponent implements OnInit {

  /**
   * The progress of making a payment
   * 
   * @type {(number | boolean)}
   * @memberof BillingInfoComponent
   */
  public progress: number | boolean = false;;

  /**
   * The two letter abbreviations of the list of states in the United States
   * 
   * @type {string[]}
   * @memberof BillingInfoComponent
   */
  public states: string[] = [
    'AK',
    'AL',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
  ];


  /**
   * Creates an instance of BillingInfoComponent.
   * @param {Router} router 
   * @param {AuthorizationService} authorizeService 
   * @param {PaymentService} paymentService 
   * @param {CreditCardService} cardService 
   * @memberof BillingInfoComponent
   */
  constructor(
    private router: Router,
    private authorizeService: AuthorizationService,
    private paymentService: PaymentService,
    public cardService: CreditCardService,
  ) { }

  /**
   * Initializes the component
   * 
   * @memberof BillingInfoComponent
   */
  ngOnInit() {
  }

  /**
   * Event handle for back button
   * 
   * @memberof BillingInfoComponent
   */
  public back(): void {
    //Navigate back to the credit card information page
    this.router.navigate(['/credit-card-info']);
  }

  /**
   * Event handler for submit button
   * 
   * @memberof BillingInfoComponent
   */
  public submit(): void {
    //Set make a payment progress to 0%
    this.progress = 0;

    //Retrieve an access token from the identity server
    this.authorizeService.authorize().subscribe(authRes => {
      //Set progress to 33%
      this.progress = .33;
      //Tokenize the credit card
      this.cardService.tokenizeCreditCard(authRes.access_token).subscribe(tokenizeRes => {
        //Update progress to 66%
        this.progress = .66;

        //Make the payment request model
        let paymentReq: PaymentRequest = new PaymentRequest();
        paymentReq.description = "Test Payment";
        paymentReq.paymentAmount = 10.00;
        paymentReq.paymentMethod = new PaymentMethod();
        paymentReq.paymentMethod.paymentToken = tokenizeRes.token; //This is the credit card token that was just tokenized
        paymentReq.paymentMethod.type = "Credit Card";
        paymentReq.referenceId = "Test"; //You can put whatever you want here. Usually your own system generated unique transaction ID.

        //Make the payment
        this.paymentService.makePayment(paymentReq, authRes.access_token).subscribe(paymentRes => {
          //Update progress to 100%
          this.progress = false;
          this.paymentService.payment = paymentRes;
          console.log(paymentRes);
          this.router.navigate(['/payment-results']);
        });
      });
    })
  }
}
