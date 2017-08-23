import { environment } from '../../environments/environment';

/**
 * Access token request model - https://login-model.softheon.com/documentation/quickstartguide/servertoserverauthentication/
 * 
 * @export
 * @class AccessTokenRequest
 */
export class AccessTokenRequest {

    /**
     * Client's unique identifier
     * 
     * @type {string}
     * @memberof AccessTokenRequest
     */
    public client_id: string = environment.clientId;

    /**
     * Client's secret
     * 
     * @type {string}
     * @memberof AccessTokenRequest
     */
    public client_secret: string = environment.clientSecret;

    /**
     * client_credentials
     * 
     * @type {string}
     * @memberof AccessTokenRequest
     */
    public grant_type: string = "client_credentials";

    /**
     * Scopes requesting access to
     * 
     * @type {string}
     * @memberof AccessTokenRequest
     */
    public scope: string = environment.scopes;
}
