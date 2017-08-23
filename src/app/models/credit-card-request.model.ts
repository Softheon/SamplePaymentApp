import { Address } from './address.model';

/**
 * Credit Card Request Model - https://hack.softheon.io/api/payments/docs/general/schemas/#creditcardrequestmodel
 * 
 * @export
 * @class CreditCardRequest
 */
export class CreditCardRequest {
    /**
     * The number on the credit card
     * 
     * @type {string}
     * @memberof CreditCardRequest
     */
    public cardNumber: string = "4111111111113000";

    /**
     * The security, or CVV code, on the card
     * 
     * @type {string}
     * @memberof CreditCardRequest
     */
    public securityCode: string = "123";

    /**
     * The expiration month of the credit card
     * 
     * @type {number}
     * @memberof CreditCardRequest
     */
    public expirationMonth: number = 12;


    /**
     * The expiration year of the credit card
     * 
     * @type {number}
     * @memberof CreditCardRequest
     */
    public expirationYear: number = 2020;

    /**
     * The name of the cardholder, as it appears on the front of the credit card
     * 
     * @type {string}
     * @memberof CreditCardRequest
     */
    public cardHolderName: string = "John Doe";


    /**
     * 	The billing address for the credit card holder
     * 
     * @type {Address}
     * @memberof CreditCardRequest
     */
    public billingAddress: Address = new Address();


    /**
     * A valid email address for the card holder
     * 
     * @type {string}
     * @memberof CreditCardRequest
     */
    public email: string = "johndoe@gmail.com";
}
