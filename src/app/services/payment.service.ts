import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { PaymentRequest } from '../models/payment-request.model';
import { PaymentResults } from '../models/payment-results.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';

/**
 * Services that makes a payment using the credit card payment token
 * 
 * @export
 * @class PaymentService
 */
@Injectable()
export class PaymentService {
  /**
   * Creates an instance of PaymentService.
   * @param {HttpClient} http 
   * @memberof PaymentService
   */
  constructor(
    private http: HttpClient
  ) { }
 
  /**
   * Executes an HTTP POST to make a payment
   * 
   * @param {PaymentRequest} req 
   * @param {string} accessToken 
   * @returns {Observable<PaymentResults>} 
   * @memberof PaymentService
   */
  public makePayment(req: PaymentRequest, accessToken: string) : Observable<PaymentResults> {
    
    //Executes the HTTP POST
    return this.http.post(environment.paymentApiBaseAddress + '/payments', req, {
      headers: new HttpHeaders({ 'Content-Type' : 'application/json', 'Authorization': 'Bearer ' + accessToken})
    }).catch((e) => {
      return Observable.throw(e);
    });
  }
}
