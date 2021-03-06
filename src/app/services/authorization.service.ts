import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AccessTokenRequest } from '../models/access-token-request.model';
import { AccessTokenResponse } from '../models/access-token-response.model';
import { environment } from '../../environments/environment';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/**
 * Service that provides ability to retrieve an access token from the identity server. The access token is required to make calls to the
 * payment API. You can read more about it here - https://login-model.softheon.com/documentation/quickstartguide/servertoserverauthentication/
 * 
 * @export
 * @class AuthorizationService
 */
@Injectable()
export class AuthorizationService {
  /**
   * Creates an instance of AuthorizationService.
   * @param {HttpClient} http 
   * @memberof AuthorizationService
   */
  constructor(
    private http: HttpClient
  ) { }

  /**
   * Executes an HTTP POST against the identity server to create and access token.
   * 
   * @returns {Observable<AccessTokenResponse>} 
   * @memberof AuthorizationService
   */
  public authorize(): Observable<AccessTokenResponse> {
    
    //Create the key value pairs to be added to the body of the HTTP POST message
    let urlSearchParams = new URLSearchParams();
    urlSearchParams.append('client_id', environment.clientId);
    urlSearchParams.append('client_secret', environment.clientSecret);
    urlSearchParams.append('grant_type', 'client_credentials');
    urlSearchParams.append('scope', environment.scopes);

    //Executes the HTTP POST
    return this.http.post<AccessTokenResponse>(environment.authorizationBaseAddress + '/connect/token', urlSearchParams.toString(), {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    }).catch((e) => {
      return Observable.throw(e);
    });
  }
}
