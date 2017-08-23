/**
 * Access Token Response Model - https://login-model.softheon.com/documentation/quickstartguide/servertoserverauthentication/
 * 
 * @export
 * @class AccessTokenResponse
 */
export class AccessTokenResponse {
    /**
     * The bearer token
     * 
     * @type {string}
     * @memberof AccessTokenResponse
     */
    public access_token: string;

    /**
     * The time the access token expires
     * 
     * @type {number}
     * @memberof AccessTokenResponse
     */
    public expires_in: number;

    /**
     * Tye type of token
     * 
     * @type {string}
     * @memberof AccessTokenResponse
     */
    public token_type: string;
}
