import { PaymentMethod } from './payment-method.model';
import { PaymentResults } from './payment-results.model';
import { RefundResults } from './refund-results.model';

/**
 * Payment Model - https://hack.softheon.io/api/payments/docs/general/schemas/#paymentmodel
 * 
 * @export
 * @class Payment
 */
export class Payment {
    /**
     * The unique ID of the payment
     * 
     * @type {number}
     * @memberof Payment
     */
    public id: number;

    /**
     * The unique ID of the account that the payment was made for
     * 
     * @type {number}
     * @memberof Payment
     */
    public accountId: number;

    /**
     * The payment amount
     * 
     * @type {number}
     * @memberof Payment
     */
    public paymentAmount: number;

    /**
     * The description of what was paid for
     * 
     * @type {string}
     * @memberof Payment
     */
    public description: string;

    /**
     * The client application provided reference ID for the payment
     * 
     * @type {string}
     * @memberof Payment
     */
    public referenceId: string;

    /**
     * An object representing the payment method for this payment
     * 
     * @type {PaymentMethod}
     * @memberof Payment
     */
    public paymentMethod: PaymentMethod;

    /**
     * The result of the payment request
     * 
     * @type {PaymentResults}
     * @memberof Payment
     */
    public result: PaymentResults;

    /**
     * The result of the refund request
     * 
     * @type {RefundResults}
     * @memberof Payment
     */
    public refunds: RefundResults;

    /**
     * The timestamp indicating when the payment was created
     * 
     * @type {Date}
     * @memberof Payment
     */
    public createdDate: Date;

    /**
     * The timestamp indicating the last time that the details of the payment were modified
     * 
     * @type {Date}
     * @memberof Payment
     */
    public modifiedDate: Date;
}
