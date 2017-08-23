/**
 * Credit Card Response Model - https://hack.softheon.io/api/payments/docs/general/schemas/#creditcardresponsemodel
 * 
 * @export
 * @class CreditCardResponse
 */
export class CreditCardResponse {

    /**
     * The payment token for the credit card
     * 
     * @type {string}
     * @memberof CreditCardResponse
     */
    public token: string;

    /**
     * The state that the credit card is in
     * 
     * @type {string}
     * @memberof CreditCardResponse
     */
    public cardState: string;

    /**
     * The pre-authorization result code
     * 
     * @type {string}
     * @memberof CreditCardResponse
     */
    public code: string;

    /**
     * The pre-authorization result message
     * 
     * @type {string}
     * @memberof CreditCardResponse
     */
    public message: string;

    /**
     * The URL that the client will be redirected to after the credit card has been created
     * 
     * @type {string}
     * @memberof CreditCardResponse
     */
    public redirectUrl: string;
}
