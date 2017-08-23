import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { CreditCardRequest } from '../models/credit-card-request.model';
import { CreditCardResponse } from '../models/credit-card-response.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';

/**
 * Service that tokenizes credit cards. These tokens can then be used to make payments. You can read more about this here -
 * https://hack.softheon.io/api/payments/docs/resources/creditcards/
 * 
 * @export
 * @class CreditCardService
 */
@Injectable()
export class CreditCardService {
  /**
   * The credit card request model
   * 
   * @type {CreditCardRequest}
   * @memberof CreditCardService
   */
  public creditCard: CreditCardRequest;

  /**
   * Creates an instance of CreditCardService.
   * @param {HttpClient} http 
   * @memberof CreditCardService
   */
  constructor(
    private http: HttpClient
  ) {
    this.creditCard = new CreditCardRequest();
   }

  /**
   * Executes an HTTP POST against the server to tokenize the credit card
   * 
   * @param {string} accessToken 
   * @returns {Observable<CreditCardResponse>} 
   * @memberof CreditCardService
   */
  public tokenizeCreditCard(accessToken: string) : Observable<CreditCardResponse> {
    return this.http.post(environment.paymentApiBaseAddress + '/creditcards', this.creditCard, {
      headers: new HttpHeaders({ 'Content-Type' : 'application/json', 'Authorization': 'Bearer ' + accessToken})
    }).catch((e) => {
      return Observable.throw(e);
    });
  }

}
