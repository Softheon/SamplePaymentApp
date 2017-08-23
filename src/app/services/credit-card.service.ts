import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { CreditCardRequest } from '../models/credit-card-request.model';
import { CreditCardResponse } from '../models/credit-card-response.model';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';

@Injectable()
export class CreditCardService {

  public creditCard: CreditCardRequest;

  constructor(
    private http: HttpClient
  ) {
    this.creditCard = new CreditCardRequest();
   }

  public tokenizeCreditCard(card: CreditCardRequest, accessToken: string) : Observable<CreditCardResponse> {
    return this.http.post(environment.paymentApiBaseAddress + '/creditcards', card, {
      headers: new HttpHeaders({ 'Content-Type' : 'application/json', 'Authorization': 'Bearer ' + accessToken})
    }).catch((e) => {
      console.log(e);
      return Observable.throw(e);
    })
  }

}
